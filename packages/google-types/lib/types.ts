import { oauth2_v2 } from 'googleapis';

export type GoogleProfile = oauth2_v2.Schema$Userinfo;

export enum Language {
  HK = 'zh-HK',
  TW = 'zh-TW',
  DA = 'da',
  NL = 'nl',
  EN = 'en',
  FR = 'fr',
  DE = 'de',
  HI = 'hi',
  ID = 'id',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  NO = 'no',
  PL = 'pl',
  PT = 'pt',
  RU = 'ru',
  ES = 'es',
  SV = 'sv',
  TH = 'th',
  TR = 'tr',
}

export enum Locale {
  // Chinese
  ZH_HK = 'zh-HK',
  ZH_TW = 'zh-TW',
  // Danish
  DA_DK = 'da-DK',

  // Dutch
  NL_NL = 'nl-NL',
  NL_BE = 'nl-BE',

  // English
  EN_AU = 'en-AU',
  EN_CA = 'en-CA',
  EN_GB = 'en-GB',
  EN_IN = 'en-IN',
  EN_BE = 'en-BE',
  EN_SG = 'en-SG',
  EN_US = 'en-US',

  // French
  FE_FR = 'fr-FR',
  FE_CA = 'fr-CA',
  FE_BE = 'fr-BE',

  // German
  DE_DE = 'de-DE',
  DE_AT = 'de-AT',
  DE_CH = 'de-CH',
  DE_BE = 'de-BE',

  // Hindi
  HI_IN = 'hi-IN',

  // Indonasian
  ID_ID = 'id-ID',

  // Italian
  IT_IT = 'it-IT',

  // Japanese
  JA_JP = 'ja-JP',

  // Korean
  KO_KR = 'ko-KR',

  // Norwegian
  NO_NO = 'no-NO',

  // Polish
  PL_PL = 'pl-PL',

  // Portugese
  PT_BR = 'pt-BR',

  // Russian
  RU_RU = 'ru-RU',

  // Spanish
  ES_ES = 'es-ES',
  ES_419 = 'es-419',

  // Swedish
  SV_SE = 'sv-SE',

  // Thai
  TH_TH = 'th-TH',

  // Turkish
  TR_TR = 'tr-TR',
}

export enum Voice {
  DEFAULT = 'default', // not a real voice (default no voice)
  AUDIO = 'audio', // not a real voice (use content as audio url)
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
