export enum Locale {
  // English
  EN_US = 'en-US',

  // Arabic
  AR_AR = 'ar-AR',

  // Chinese
  ZH_CN = 'zh-CN',

  // Dutch
  NL_NL = 'nl-NL',

  // French
  FR_FR = 'fr-FR',
  FR_CA = 'fr-CA',

  // German
  DE_DE = 'de-DE',

  // Gujarati
  GU_IN = 'gu-IN',

  // Hindi
  HI_IN = 'hi-IN',

  // Italian
  IT_IT = 'it-IT',

  // Japanese
  JA_JP = 'ja-JP',

  // Korean
  KO_KR = 'ko-KR',

  // Marathi
  MR_IN = 'mr-IN',

  // Portugese
  PT_BR = 'pt-BR',

  // Spanish
  ES_ES = 'es-ES',
  ES_MX = 'es-MX',

  // Tamil
  TA_IN = 'ta-IN',

  // Telugu
  TE_IN = 'te-IN',

  // Turkish
  TR_TR = 'tr-TR',
}

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
