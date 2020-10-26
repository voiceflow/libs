export enum Voice {
  AUDIO = 'audio', // not a real voice (use content as audio url)
  DEFAULT = 'default', // not a real voice (default no voice)
}

export type Prompt<V> = {
  desc?: string; // desc when voice is 'audio'
  voice: V;
  content: string;
};

export type NoMatches<V> = {
  randomize: boolean;
  reprompts: Prompt<V>[];
};

export enum ExpressionType {
  PLUS = 'plus',
  MINUS = 'minus',
  TIMES = 'times',
  DIVIDE = 'divide',
  EQUALS = 'equals',
  GREATER = 'greater',
  LESS = 'less',
  AND = 'and',
  OR = 'or',
  NOT = 'not',
  VALUE = 'value',
  VARIABLE = 'variable',
  ADVANCE = 'advance',
}

export enum StateRequestType {
  INTENT = 'INTENT',
}

export enum IntentRequestType {
  INTENT_REQUEST = 'IntentRequest',
}

export type IntentRequestSlot = {
  name: string;
  value?: string;
};

export type IntentRequestIntent = {
  name: string;
  slots: Record<string, IntentRequestSlot>;
};

export type IntentRequestPayload = {
  type: StateRequestType.INTENT;
  input?: string;
  intent: IntentRequestIntent;
};

export type IntentRequest = {
  type: StateRequestType.INTENT;
  payload: IntentRequestPayload;
};

export type StateRequest = IntentRequest;
