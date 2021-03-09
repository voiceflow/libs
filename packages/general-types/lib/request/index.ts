export enum RequestType {
  INTENT = 'intent',
  TEXT = 'text',
}
export interface Request<T extends string = string, P = Record<string, unknown>> {
  type: T;
  payload: P;
}

export type TextRequest = Request<RequestType.TEXT, string>;
export type IntentRequest = Request<
  RequestType.INTENT,
  {
    query: string; // original text input
    intent: { name: string }; // matched intent name
    entities: {
      name: string; // name of matched entity
      value: string; // inferred value of matched entity
      rawValue?: string[] | string[][]; // unmodifed value returned from LUIS
      query?: string; // raw value of matched entity
    }[]; // entities matches - multiple of the same entity name may be matched
    confidence?: number; // 0-1 confidence of match;
  }
>;
