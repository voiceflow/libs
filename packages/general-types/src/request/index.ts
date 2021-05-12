export enum RequestType {
  INTENT = 'intent',
  TEXT = 'text',
  LAUNCH = 'launch',
}
export interface Request<T extends string = string, P = unknown> {
  type: T;
  payload: P;
}

export type VerboseValue = {
  rawText: string; // the original word found in the query
  canonicalText: string; // the transformed word returned by LUIS for list entities
  startIndex: number; // the index the word starts on in the query string
};

export type Entity = {
  name: string; // name of matched entity
  value: string; // inferred value of matched entity
  verboseValue?: VerboseValue[]; // more detailed results from LUIS
  query?: string; // raw value of matched entity
};

export type LaunchRequest = Request<RequestType.LAUNCH, undefined>;
export type TextRequest = Request<RequestType.TEXT, string>;
export type IntentRequest = Request<
  RequestType.INTENT,
  {
    query: string; // original text input
    intent: { name: string }; // matched intent name
    entities: Entity[]; // entities matches - multiple of the same entity name may be matched
    confidence?: number; // 0-1 confidence of match;
  }
>;
