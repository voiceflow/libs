export enum RequestType {
  INTENT = 'intent',
  TEXT = 'text',
  LAUNCH = 'launch',
}
export interface BaseRequest<P = unknown> {
  type: string;
  payload: P;
}

export interface VerboseValue {
  rawText: string; // the original word found in the query
  canonicalText: string; // the transformed word returned by LUIS for list entities
  startIndex: number; // the index the word starts on in the query string
}

export interface Entity {
  name: string; // name of matched entity
  value: string; // inferred value of matched entity
  verboseValue?: VerboseValue[]; // more detailed results from LUIS
  query?: string; // raw value of matched entity
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
