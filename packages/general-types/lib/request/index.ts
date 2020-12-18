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
    slots: { name: string; value: string }[]; // slot matches
  }
>;

export type DataRequest<D = Record<string, unknown>> = Request<RequestType.DATA, D>;

export type GeneralRequest = TextRequest | IntentRequest | DataRequest;
