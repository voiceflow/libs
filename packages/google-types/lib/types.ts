export type Prompt = {
  voice: Voice;
  content: string;
};

export type NoMatches = {
  randomize: boolean;
  reprompts: Prompt[];
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

export enum Locale {
  EN_US = 'en-US',
  EN_AU = 'en-AU',
  EN_CA = 'en-CA',
  EN_IN = 'en-IN',
  EN_GB = 'en-GB',
  FR_CA = 'fr-CA',
  ES_US = 'es-US',
  FR_FR = 'fr-FR',
  DE_DE = 'de-DE',
  IT_IT = 'it-IT',
  JA_JP = 'ja-JP',
  ES_ES = 'es-ES',
  ES_MX = 'es-MX',
  PT_BR = 'pt-BR',
  HI_IN = 'hi-IN',
}

export enum Voice {
  DEFAULT = 'default', // not a real voice (default no voice)
}

export const DEFAULT_Voice = {};

export const REGIONAL_Voice = [
  {
    label: 'Default',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English US',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English AU',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English GB',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English IN',
    options: [Voice.DEFAULT],
  },
  {
    label: 'German',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Spanish',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Italian',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Japanese',
    options: [Voice.DEFAULT],
  },
  {
    label: 'French',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Portuguese',
    options: [Voice.DEFAULT],
  },
];
