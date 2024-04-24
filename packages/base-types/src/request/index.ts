import { hasOptionalProperty, hasRequiredProperty, hasRequiredSchema, isArrayOf, isRecord } from '@base-types/utils/types';
import { isObject } from '@voiceflow/common/build/cjs/utils/object';

import type { Chip } from '../button';
import { ActionPayload, isActionPayload } from './action';

export * as Action from './action';

export enum RequestType {
  TEXT = 'text',
  ACTION = 'action',
  INTENT = 'intent',
  LAUNCH = 'launch',
  NO_REPLY = 'no-reply',
}

export interface RequestConfig {
  tts?: boolean;
  stopAll?: boolean;
  stripSSML?: boolean;
  stopTypes?: string[];
  selfDelegate?: boolean;
  excludeTypes?: string[];
}

export interface VerboseValue {
  rawText: string; // the original word found in the query
  canonicalText: string; // the transformed word returned by LUIS for list entities
  startIndex: number; // the index the word starts on in the query string
}

export interface Entity {
  name: string; // name of matched entity
  value: string; // inferred value of matched entity
  query?: string; // raw value of matched entity
  verboseValue?: VerboseValue[]; // more detailed results from LUIS
}

export interface LabelRequestPayload {
  label?: string;
}
export interface BaseRequest {
  type: string;
  payload?: unknown;
  diagramID?: string; // particular topic to match against
}

export interface LaunchRequestPayload {
  persona?: string;
}

export interface LaunchRequest extends BaseRequest {
  type: RequestType.LAUNCH;
  payload?: LaunchRequestPayload;
}

export interface NoReplyRequest extends Omit<BaseRequest, 'payload'> {
  type: RequestType.NO_REPLY;
}

export interface TextRequest extends BaseRequest {
  type: RequestType.TEXT;
  payload: string;
}

interface ActionAndLabelRequestPayload extends ActionPayload, LabelRequestPayload {}

export interface IntentRequestPayload extends ActionAndLabelRequestPayload {
  query: string; // original text input
  intent: { name: string }; // matched intent name
  entities: Entity[]; // entities matches - multiple of the same entity name may be matched
  confidence?: number; // 0-1 confidence of match;
  data?: Record<string, unknown>;
}

export interface IntentRequest extends BaseRequest {
  type: RequestType.INTENT;
  payload: IntentRequestPayload;
}

export interface GeneralRequest extends BaseRequest {
  type: string; // the general request type is dynamic
  payload?: ActionAndLabelRequestPayload;
}

export interface ActionRequest extends BaseRequest {
  type: RequestType.ACTION;
  payload?: ActionAndLabelRequestPayload;
}

export interface BaseRequestButton<T extends BaseRequest = BaseRequest> {
  name: string;
  request: T;
}

export interface TextRequestButton extends BaseRequestButton<TextRequest> {}

export interface ActionRequestButton extends BaseRequestButton<ActionRequest> {}

export interface IntentRequestButton extends BaseRequestButton<IntentRequest> {}

export interface GeneralRequestButton extends BaseRequestButton<GeneralRequest> {}

export type AnyRequestButton = TextRequestButton | IntentRequestButton | GeneralRequestButton | ActionRequestButton;

export interface NodeButton {
  /**
   * @deprecated Use buttons
   */
  chips?: Chip[];

  buttons?: AnyRequestButton[];
}

export const isBaseRequest = (value: unknown): value is BaseRequest =>
  isRecord(value) && hasRequiredProperty(value, 'type', 'string') && hasOptionalProperty(value, 'diagramID', 'string');

export const isTextRequest = (value: unknown): value is TextRequest =>
  isBaseRequest(value) && value.type === RequestType.TEXT && isRecord(value) && hasRequiredProperty(value, 'payload', 'string');

const isLabelPayload = (value: unknown): value is LabelRequestPayload => isRecord(value) && hasOptionalProperty(value, 'label', 'string');

const isActionAndLabelResponsePayload = (value: unknown): value is ActionAndLabelRequestPayload =>
  isRecord(value) && isLabelPayload(value) && isActionPayload(value);

export const isActionRequest = (value: unknown): value is ActionRequest =>
  isBaseRequest(value) &&
  value.type === RequestType.ACTION &&
  isRecord(value) &&
  hasOptionalProperty(value, 'payload', isActionAndLabelResponsePayload);

const isLaunchRequestPayload = (value: unknown): value is LaunchRequestPayload => isRecord(value) && hasOptionalProperty(value, 'persona', 'string');

export const isLaunchRequest = (value: unknown): value is LaunchRequest =>
  isBaseRequest(value) && value.type === RequestType.LAUNCH && isRecord(value) && hasOptionalProperty(value, 'payload', isLaunchRequestPayload);

export const isNoReplyRequest = (value: unknown): value is NoReplyRequest => isBaseRequest(value) && value.type === RequestType.NO_REPLY;

const isVerboseValue = (value: unknown): value is VerboseValue =>
  isRecord(value) &&
  hasRequiredProperty(value, 'rawText', 'string') &&
  hasRequiredProperty(value, 'canonicalText', 'string') &&
  hasRequiredProperty(value, 'startIndex', 'number');

const isEntity = (value: unknown): value is Entity =>
  isRecord(value) &&
  hasRequiredProperty(value, 'name', 'string') &&
  hasRequiredProperty(value, 'value', 'string') &&
  hasOptionalProperty(value, 'query', 'string') &&
  hasRequiredProperty(value, 'verboseValue', 'object') &&
  isArrayOf(value.verboseValue, (value) => isVerboseValue(value));

const isIntentRequestPayload = (value: unknown): value is IntentRequestPayload =>
  isActionAndLabelResponsePayload(value) &&
  isRecord(value) &&
  hasRequiredProperty(value, 'query', 'string') &&
  hasRequiredSchema(value.intent, (intent) => hasRequiredProperty(intent, 'name', 'string')) &&
  isArrayOf(value.entities, (value: unknown) => isEntity(value)) &&
  hasOptionalProperty(value, 'confidence', 'number') &&
  hasOptionalProperty(value, 'query', 'object');

export const isIntentRequest = (value: unknown): value is IntentRequest =>
  isBaseRequest(value) && value.type === RequestType.INTENT && isObject(value) && hasRequiredProperty(value, 'payload', isIntentRequestPayload);

const ALL_REQUEST_TYPES = Object.values(RequestType) as string[];

export const isGeneralRequest = (value: unknown): value is GeneralRequest =>
  isBaseRequest(value) &&
  !ALL_REQUEST_TYPES.includes(value.type) &&
  isObject(value) &&
  (!('payload' in value) || isActionAndLabelResponsePayload(value.payload));
