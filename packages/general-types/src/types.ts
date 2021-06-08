import { Nullable } from '@voiceflow/api-sdk';

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

export enum Language {
  // English
  EN = 'en',

  // Arabic
  AR = 'ar',

  // Chinese
  ZH = 'zh',

  // Dutch
  NL = 'nl',

  // French
  FR = 'fr',

  // German
  DE = 'de',

  // Gujarati
  GU = 'gu',

  // Hindi
  HI = 'hi',

  // Italian
  IT = 'it',

  // Japanese
  JA = 'ja',

  // Korean
  KO = 'ko',

  // Marathi
  MR = 'mr',

  // Portugese
  PT = 'pt',

  // Spanish
  ES = 'es',

  // Tamil
  TA = 'ta',

  // Telugu
  TE = 'te',

  // Turkish
  TR = 'tr',
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

/**
 * @deprecated Use Button instead
 */
export type Chip = {
  label: string;
};

export enum ButtonType {
  INTENT = 'INTENT',
}

export interface BaseButton<T> {
  type: ButtonType;
  name: string;
  payload: T;
}

export interface IntentButton extends BaseButton<{ intentID: Nullable<string> }> {
  type: ButtonType.INTENT;
}

// will be union in future
export type AnyButton = IntentButton;

export type NoMatches<V> = {
  randomize: boolean;
  reprompts: Prompt<V>[];
};

export enum CanvasNodeVisibility {
  PREVIEW = 'preview',
  ALL_VARIANTS = 'all-variants',
}

export enum ButtonsLayout {
  STACKED = 'stacked',
  CAROUSEL = 'carousel',
}

export enum ExpressionType {
  EQUALS = 'equals',
  GREATER = 'greater',
  LESS = 'less',
  AND = 'and',
  OR = 'or',
  VALUE = 'value',
  VARIABLE = 'variable',
  ADVANCE = 'advance',

  // soon to be deprecated
  PLUS = 'plus',
  MINUS = 'minus',
  TIMES = 'times',
  DIVIDE = 'divide',
  NOT = 'not',
}

// new types

export enum ExpressionTypeV2 {
  EQUALS = 'equals',
  GREATER = 'greater',
  LESS = 'less',
  AND = 'and',
  OR = 'or',
  VALUE = 'value',
  VARIABLE = 'variable',
  ADVANCE = 'advance',
  NOT_EQUAL = 'not_equal',
  GREATER_OR_EQUAL = 'greater_or_equal',
  LESS_OR_EQUAL = 'less_or_equal',
  CONTAINS = 'contains',
  NOT_CONTAIN = 'not_contain',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  HAS_VALUE = 'has_value',
  IS_EMPTY = 'is_empty',
}
