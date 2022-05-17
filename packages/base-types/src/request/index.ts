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
  verboseValue?: VerboseValue[]; // more detailed results from LUIS
}

export interface LabelRequestPayload {
  label?: string;
}
export interface BaseRequest<Payload = unknown> {
  type: string;
  payload: Payload;
  diagramID?: string; // particular topic to match against
}

export interface LaunchRequest extends BaseRequest<undefined> {
  type: RequestType.LAUNCH;
}

export interface NoReplyRequest extends BaseRequest<undefined> {
  type: RequestType.NO_REPLY;
}

export interface TextRequest extends BaseRequest<string> {
  type: RequestType.TEXT;
}

interface ActionAndLabelRequestPayload extends ActionPayload, LabelRequestPayload {}

export interface IntentRequestPayload extends ActionAndLabelRequestPayload {
  query: string; // original text input
  intent: { name: string }; // matched intent name
  entities: Entity[]; // entities matches - multiple of the same entity name may be matched
  confidence?: number; // 0-1 confidence of match;
}

export interface IntentRequest extends BaseRequest<IntentRequestPayload> {
  type: RequestType.INTENT;
}

export interface GeneralRequest extends BaseRequest<ActionAndLabelRequestPayload> {
  type: string; // the general request type is dynamic, used to m
}

export interface ActionRequest extends BaseRequest<ActionAndLabelRequestPayload> {
  type: RequestType.ACTION;
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

export const isTextRequest = (request: BaseRequest): request is TextRequest => request.type === RequestType.TEXT;

export const isActionRequest = (request: BaseRequest): request is ActionRequest => request.type === RequestType.ACTION;

export const isLaunchRequest = (request: BaseRequest): request is LaunchRequest => request.type === RequestType.LAUNCH;

export const isNoReplyRequest = (request: BaseRequest): request is NoReplyRequest => request.type === RequestType.NO_REPLY;

export const isIntentRequest = (request: BaseRequest): request is IntentRequest => request.type === RequestType.INTENT;

const ALL_REQUEST_TYPES = Object.values(RequestType) as string[];

export const isGeneralRequest = (request: BaseRequest): request is GeneralRequest => !ALL_REQUEST_TYPES.includes(request.type);
