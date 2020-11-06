import { oauth2_v2 } from 'googleapis';

export type GoogleProfile = oauth2_v2.Schema$Userinfo;

export enum Language {
  HK= 'zh-HK',
  CN= 'zh-CN',
  TW= 'zh-TW',
  DA= 'da',
  NL= 'nl',
  EN= 'en',
  FR= 'fr',
  DE= 'de',
  HI= 'hi',
  ID= 'id',
  IT= 'it',
  JA= 'ja',
  KO= 'ko',
  NO= 'no',
  PL= 'pl',
  PT= 'pt',
  BR= 'pt-BR',
  RU= 'ru',
  ES= 'es',
  SV= 'sv',
  TH= 'th',
  TR= 'tr',
  UK= 'uk',
}

export enum Locale {
  EN_AU = 'en-AU',
  EN_CA = 'en-CA',
  EN_GB = 'en-GB',
  EN_IN = 'en-IN',
  EN_BE = 'en-BE',
  EN_SG = 'en-SG',
  EN_US = 'en-US',
  ZH_HK = 'zh-HK',
  ZH_TW = 'zh-TW',
  ZH_CN = 'zh-CN',
  DA_DK = 'da-DK',
  NL_NL = 'nl-NL',
  NL_BE = 'nl-BE',
  FE_FR = 'fr-FR',
  FE_CA = 'fr-CA',
  FE_BE = 'fr-BE',
  DE_DE = 'de-DE',
  DE_AT = 'de-AT',
  DE_CH = 'de-CH',
  DE_BE = 'de-BE',
  HI_IN = 'hi-IN',
  ID_ID = 'id-ID',
  IT_IT = 'it-IT',
  JA_JP = 'ja-JP',
  KO_KR = 'ko-KR',
  NO_NO = 'no-NO',
  PL_PL = 'pl-PL',
  PT_BR = 'pt-BR',
  RU_RU = 'ru-RU',
  ES_ES = 'es-ES',
  ES_419 = 'es-419',
  SV_SE = 'sv-SE',
  TH_TH = 'th-TH',
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
