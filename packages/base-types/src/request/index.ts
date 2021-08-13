import { Chip } from '../button';

export enum RequestType {
  INTENT = 'intent',
  TEXT = 'text',
  LAUNCH = 'launch',
}

export interface RequestConfig {
  tts?: boolean;
  stopAll?: boolean;
  stripSSML?: boolean;
  stopTypes?: string[];
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

export interface BaseRequest<P = unknown> {
  type: string;
  payload: P;
}

export interface LaunchRequest extends BaseRequest<undefined> {
  type: RequestType.LAUNCH;
}

export interface TextRequest extends BaseRequest<string> {
  type: RequestType.TEXT;
}

export interface IntentRequestPayload {
  query: string; // original text input
  intent: { name: string }; // matched intent name
  entities: Entity[]; // entities matches - multiple of the same entity name may be matched
  confidence?: number; // 0-1 confidence of match;
}

export interface IntentRequest extends BaseRequest<IntentRequestPayload> {
  type: RequestType.INTENT;
}

export interface BaseRequestButton<T extends BaseRequest = BaseRequest> {
  name: string;
  request: T;
}

export type TextRequestButton = BaseRequestButton<TextRequest>;

export type IntentRequestButton = BaseRequestButton<IntentRequest>;

export type AnyRequestButton = TextRequestButton | IntentRequestButton;

export interface NodeButton {
  /**
   * @deprecated Use buttons
   */
  chips?: Chip[];

  buttons?: AnyRequestButton[];
}

export const isTextRequest = (request: BaseRequest): request is TextRequest => request.type === RequestType.TEXT;

export const isLaunchRequest = (request: BaseRequest): request is LaunchRequest => request.type === RequestType.LAUNCH;

export const isIntentRequest = (request: BaseRequest): request is IntentRequest => request.type === RequestType.INTENT;
