import type { Chip } from '../button';
import { ActionPayload } from './action';

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

  /**
   * @deprecated This value is no longer generated. Please remove all code relying on
   * LUIS NLU to produce `verboseValue`
   */
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

interface ActionAndLabelRequestPayload extends ActionPayload, LabelRequestPayload { }

export interface IntentRequestPayload extends ActionAndLabelRequestPayload {
  intent: { name: string }; // matched intent name
  entities: Entity[]; // entities matches - multiple of the same entity name may be matched
  query: string; // original text input
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

export interface TextRequestButton extends BaseRequestButton<TextRequest> { }

export interface ActionRequestButton extends BaseRequestButton<ActionRequest> { }

export interface IntentRequestButton extends BaseRequestButton<IntentRequest> { }

export interface GeneralRequestButton extends BaseRequestButton<GeneralRequest> { }

export type AnyRequestButton = TextRequestButton | IntentRequestButton | GeneralRequestButton | ActionRequestButton;

export interface NodeButton {
  /**
   * @deprecated Use buttons
   */
  chips?: Chip[];

  buttons?: AnyRequestButton[];
}

/**
 * @deprecated This type guard is no longer an effective check if `request` is the specified type. The actual
 * data being sent does not match the original type definition. This type guard will not be updated with a fix.
 * Please use the type guards and equivalent DTOs in `@voiceflow/dtos` instead.
 */
export const isTextRequest = (request: BaseRequest): request is TextRequest => request.type === RequestType.TEXT;

/**
 * @deprecated This type guard is no longer an effective check if `request` is the specified type. The actual
 * data being sent does not match the original type definition. This type guard will not be updated with a fix.
 * Please use the type guards and equivalent DTOs in `@voiceflow/dtos` instead.
 */
export const isActionRequest = (request: BaseRequest): request is ActionRequest => request.type === RequestType.ACTION;

/**
 * @deprecated This type guard is no longer an effective check if `request` is the specified type. The actual
 * data being sent does not match the original type definition. This type guard will not be updated with a fix.
 * Please use the type guards and equivalent DTOs in `@voiceflow/dtos` instead.
 */
export const isLaunchRequest = (request: BaseRequest): request is LaunchRequest => request.type === RequestType.LAUNCH;

/**
 * @deprecated This type guard is no longer an effective check if `request` is the specified type. The actual
 * data being sent does not match the original type definition. This type guard will not be updated with a fix.
 * Please use the type guards and equivalent DTOs in `@voiceflow/dtos` instead.
 */
export const isNoReplyRequest = (request: BaseRequest): request is NoReplyRequest =>
  request.type === RequestType.NO_REPLY;

/**
 * @deprecated This type guard is no longer an effective check if `request` is the specified type. The actual
 * data being sent does not match the original type definition. This type guard will not be updated with a fix.
 * Please use the type guards and equivalent DTOs in `@voiceflow/dtos` instead.
 */
export const isIntentRequest = (request: BaseRequest): request is IntentRequest => request.type === RequestType.INTENT;

const ALL_REQUEST_TYPES = Object.values(RequestType) as string[];

/**
 * @deprecated This type guard is no longer an effective check if `request` is the specified type. The actual
 * data being sent does not match the original type definition. This type guard will not be updated with a fix.
 * Please use the type guards and equivalent DTOs in `@voiceflow/dtos` instead.
 */
export const isGeneralRequest = (request: BaseRequest): request is GeneralRequest =>
  !ALL_REQUEST_TYPES.includes(request.type);
