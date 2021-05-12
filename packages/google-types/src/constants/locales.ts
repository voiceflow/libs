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
  FR_FR = 'fr-FR',
  FR_CA = 'fr-CA',
  FR_BE = 'fr-BE',

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

export const LanguageToLocale: Record<Language, Locale[]> = {
  [Language.DA]: [Locale.DA_DK],
  [Language.DE]: [Locale.DE_DE, Locale.DE_AT, Locale.DE_CH, Locale.DE_BE],
  [Language.EN]: [Locale.EN_US, Locale.EN_AU, Locale.EN_CA, Locale.EN_GB, Locale.EN_IN, Locale.EN_BE, Locale.EN_SG],
  [Language.ES]: [Locale.ES_ES, Locale.ES_419],
  [Language.FR]: [Locale.FR_FR, Locale.FR_CA, Locale.FR_BE],
  [Language.HI]: [Locale.HI_IN],
  [Language.HK]: [Locale.ZH_HK],
  [Language.ID]: [Locale.ID_ID],
  [Language.IT]: [Locale.IT_IT],
  [Language.JA]: [Locale.JA_JP],
  [Language.KO]: [Locale.KO_KR],
  [Language.NL]: [Locale.NL_NL, Locale.NL_BE],
  [Language.NO]: [Locale.NO_NO],
  [Language.PL]: [Locale.PL_PL],
  [Language.PT]: [Locale.PT_BR],
  [Language.RU]: [Locale.RU_RU],
  [Language.SV]: [Locale.SV_SE],
  [Language.TH]: [Locale.TH_TH],
  [Language.TR]: [Locale.TR_TR],
  [Language.TW]: [Locale.ZH_TW],
};

export enum VoiceLanguageCode {
  AR_XA = 'ar-XA',
  BN_IN = 'bn-IN',
  CMN_CN = 'cmn-CN',
  CMN_TW = 'cmn-TW',
  CS_CZ = 'cs-CZ',
  DA_DK = 'da-DK',
  DE_DE = 'de-DE',
  EL_GR = 'el-GR',
  EN_AU = 'en-AU',
  EN_GB = 'en-GB',
  EN_IN = 'en-IN',
  EN_US = 'en-US',
  ES_ES = 'es-ES',
  FI_FI = 'fi-FI',
  FIL_PH = 'fil-PH',
  FR_CA = 'fr-CA',
  FR_FR = 'fr-FR',
  GU_IN = 'gu-IN',
  HI_IN = 'hi-IN',
  HU_HU = 'hu-HU',
  ID_ID = 'id-ID',
  IT_IT = 'it-IT',
  JA_JP = 'ja-JP',
  KN_IN = 'kn-IN',
  KO_KR = 'ko-KR',
  ML_IN = 'ml-IN',
  NB_NO = 'nb-NO',
  NL_NL = 'nl-NL',
  PL_PL = 'pl-PL',
  PT_BR = 'pt-BR',
  PT_PT = 'pt-PT',
  RU_RU = 'ru-RU',
  SK_SK = 'sk-SK',
  SV_SE = 'sv-SE',
  TA_IN = 'ta-IN',
  TE_IN = 'te-IN',
  TH_TH = 'th-TH',
  TR_TR = 'tr-TR',
  UK_UA = 'uk-UA',
  VI_VN = 'vi-VN',
  YUQ_HK = 'yue-HK',
}

export const LocaleToVoiceLanguageCode: Record<Locale, VoiceLanguageCode> = {
  [Locale.DA_DK]: VoiceLanguageCode.DA_DK,

  [Locale.DE_DE]: VoiceLanguageCode.DE_DE,
  [Locale.DE_AT]: VoiceLanguageCode.DE_DE,
  [Locale.DE_CH]: VoiceLanguageCode.DE_DE,
  [Locale.DE_BE]: VoiceLanguageCode.DE_DE,

  [Locale.NL_NL]: VoiceLanguageCode.NL_NL,
  [Locale.NL_BE]: VoiceLanguageCode.NL_NL,

  [Locale.EN_US]: VoiceLanguageCode.EN_US,
  [Locale.EN_CA]: VoiceLanguageCode.EN_US,
  [Locale.EN_IN]: VoiceLanguageCode.EN_IN,
  [Locale.EN_GB]: VoiceLanguageCode.EN_GB,
  [Locale.EN_BE]: VoiceLanguageCode.EN_GB,
  [Locale.EN_SG]: VoiceLanguageCode.EN_GB,
  [Locale.EN_AU]: VoiceLanguageCode.EN_AU,

  [Locale.ES_ES]: VoiceLanguageCode.ES_ES,
  [Locale.ES_419]: VoiceLanguageCode.ES_ES,

  [Locale.FR_FR]: VoiceLanguageCode.FR_FR,
  [Locale.FR_CA]: VoiceLanguageCode.FR_CA,
  [Locale.FR_BE]: VoiceLanguageCode.FR_FR,

  [Locale.HI_IN]: VoiceLanguageCode.HI_IN,

  [Locale.ID_ID]: VoiceLanguageCode.ID_ID,

  [Locale.IT_IT]: VoiceLanguageCode.IT_IT,

  [Locale.JA_JP]: VoiceLanguageCode.JA_JP,

  [Locale.KO_KR]: VoiceLanguageCode.KO_KR,

  [Locale.NO_NO]: VoiceLanguageCode.NB_NO,

  [Locale.PL_PL]: VoiceLanguageCode.PL_PL,

  [Locale.PT_BR]: VoiceLanguageCode.PT_BR,

  [Locale.RU_RU]: VoiceLanguageCode.RU_RU,

  [Locale.SV_SE]: VoiceLanguageCode.SV_SE,

  [Locale.TH_TH]: VoiceLanguageCode.TH_TH,

  [Locale.TR_TR]: VoiceLanguageCode.TR_TR,

  [Locale.ZH_TW]: VoiceLanguageCode.CMN_TW,

  [Locale.ZH_HK]: VoiceLanguageCode.YUQ_HK,
};
