export enum RequestType {
  INTENT = 'intent',
  TEXT = 'text',
  DATA = 'data',
}

export interface Request<T extends RequestType, P> {
  type: T;
  payload: P;
}

export type TextRequest = Request<RequestType.TEXT, string>;
export type IntentRequest = Request<
  RequestType.INTENT,
  {
    query: string; // original text input
    intent: { name: string }; // matched intent name
    slots: {
      name: string; // name of matched slot
      value: string; // inferred value of matched slot
      query?: string; // raw value of matched slot
    }[]; // slot matches - multiple of the same slot name may be matched
  }
>;

export type DataRequest<D = Record<string, unknown>> = Request<RequestType.DATA, D>;

export type GeneralRequest = TextRequest | IntentRequest | DataRequest;
