export enum Voice {
  AUDIO = 'audio', // not a real voice (use content as audio url)
  DEFAULT = 'default', // not a real voice (default no voice)
}

export enum Locale {
  // English
  EN_US = 'en-US',

  // Arabic
  AR_AR = 'ar-AR',

  // Bulgarian
  BG_BG = 'bg-BG',

  // Catalan
  CA_ES = 'ca-ES',

  // Czech
  CS_CZ = 'cs-CZ',

  // Chinese
  ZH_CN = 'zh-CN',
  ZH_TW = 'zh-TW',

  // Danish
  DA_DK = 'da-DK',

  // Dutch / Flemish
  NL_NL = 'nl-NL',
  NL_BE = 'nl-BE',

  // Estonian
  ET_EE = 'et-EE',

  // French
  FR_FR = 'fr-FR',
  FR_CA = 'fr-CA',

  // German
  DE_DE = 'de-DE',

  // Hebrew
  HE_IL = 'he-IL',

  // Hungarian
  HU_HU = 'hu-HU',

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

  // Polish
  PL_PL = 'pl-PL',

  // Portugese
  PT_PT = 'pt-PT',
  PT_BR = 'pt-BR',

  // Romanian
  RO_RO = 'ro-RO',

  // Russian
  RU_RU = 'ru-RU',

  // Spanish
  ES_ES = 'es-ES',
  ES_MX = 'es-MX',

  // Tamil
  TA_IN = 'ta-IN',

  // Telugu
  TE_IN = 'te-IN',

  // Turkish
  TR_TR = 'tr-TR',

  // Ukrainian
  UK_UA = 'uk-UA',

  // Vietnamese
  VI_VN = 'vi-VN',
}

export enum Language {
  // English
  EN = 'en',

  // Arabic
  AR = 'ar',

  // Bulgarian
  BG = 'bg',

  // Catalan
  CA = 'ca',

  // Czech
  CS = 'cs',

  // Chinese
  ZH = 'zh',

  // Danish
  DA = 'da',

  // Dutch / Flemish
  NL = 'nl',

  // Estonian
  ET = 'et',

  // French
  FR = 'fr',

  // German
  DE = 'de',

  // Gujarati
  GU = 'gu',

  // Hebrew
  HE = 'he',

  // Hindi
  HI = 'hi',

  // Hungarian
  HU = 'hu',

  // Italian
  IT = 'it',

  // Japanese
  JA = 'ja',

  // Korean
  KO = 'ko',

  // Marathi
  MR = 'mr',

  // Polish
  PL = 'pl',

  // Portugese
  PT = 'pt',

  // Romanian
  RO = 'ro',

  // Russian
  RU = 'ru',

  // Spanish
  ES = 'es',

  // Tamil
  TA = 'ta',

  // Telugu
  TE = 'te',

  // Turkish
  TR = 'tr',

  // Ukrainian
  UK = 'uk',

  // Vietnamese
  VI = 'vi',
}

const LanguageValues: ReadonlySet<Language> = new Set(Object.values(Language));

export const isVoiceflowLanguage = (lang: any): lang is Language => LanguageValues.has(lang);
