// gactions
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

// dialogflow es
export enum DFESLanguage {
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

export enum DFESLocale {
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

export const DFESLanguageToLocale: Record<DFESLanguage, DFESLocale[]> = {
  [DFESLanguage.DA]: [DFESLocale.DA_DK],
  [DFESLanguage.DE]: [DFESLocale.DE_DE, DFESLocale.DE_AT, DFESLocale.DE_CH, DFESLocale.DE_BE],
  [DFESLanguage.EN]: [DFESLocale.EN_US, DFESLocale.EN_AU, DFESLocale.EN_CA, DFESLocale.EN_GB, DFESLocale.EN_IN, DFESLocale.EN_BE, DFESLocale.EN_SG],
  [DFESLanguage.ES]: [DFESLocale.ES_ES, DFESLocale.ES_419],
  [DFESLanguage.FR]: [DFESLocale.FR_FR, DFESLocale.FR_CA, DFESLocale.FR_BE],
  [DFESLanguage.HI]: [DFESLocale.HI_IN],
  [DFESLanguage.HK]: [DFESLocale.ZH_HK],
  [DFESLanguage.ID]: [DFESLocale.ID_ID],
  [DFESLanguage.IT]: [DFESLocale.IT_IT],
  [DFESLanguage.JA]: [DFESLocale.JA_JP],
  [DFESLanguage.KO]: [DFESLocale.KO_KR],
  [DFESLanguage.NL]: [DFESLocale.NL_NL, DFESLocale.NL_BE],
  [DFESLanguage.NO]: [DFESLocale.NO_NO],
  [DFESLanguage.PL]: [DFESLocale.PL_PL],
  [DFESLanguage.PT]: [DFESLocale.PT_BR],
  [DFESLanguage.RU]: [DFESLocale.RU_RU],
  [DFESLanguage.SV]: [DFESLocale.SV_SE],
  [DFESLanguage.TH]: [DFESLocale.TH_TH],
  [DFESLanguage.TR]: [DFESLocale.TR_TR],
  [DFESLanguage.TW]: [DFESLocale.ZH_TW],
};

export enum DFESVoiceLanguageCode {
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

export const DFESLocaleToVoiceLanguageCode: Record<DFESLocale, DFESVoiceLanguageCode> = {
  [DFESLocale.DA_DK]: DFESVoiceLanguageCode.DA_DK,

  [DFESLocale.DE_DE]: DFESVoiceLanguageCode.DE_DE,
  [DFESLocale.DE_AT]: DFESVoiceLanguageCode.DE_DE,
  [DFESLocale.DE_CH]: DFESVoiceLanguageCode.DE_DE,
  [DFESLocale.DE_BE]: DFESVoiceLanguageCode.DE_DE,

  [DFESLocale.NL_NL]: DFESVoiceLanguageCode.NL_NL,
  [DFESLocale.NL_BE]: DFESVoiceLanguageCode.NL_NL,

  [DFESLocale.EN_US]: DFESVoiceLanguageCode.EN_US,
  [DFESLocale.EN_CA]: DFESVoiceLanguageCode.EN_US,
  [DFESLocale.EN_IN]: DFESVoiceLanguageCode.EN_IN,
  [DFESLocale.EN_GB]: DFESVoiceLanguageCode.EN_GB,
  [DFESLocale.EN_BE]: DFESVoiceLanguageCode.EN_GB,
  [DFESLocale.EN_SG]: DFESVoiceLanguageCode.EN_GB,
  [DFESLocale.EN_AU]: DFESVoiceLanguageCode.EN_AU,

  [DFESLocale.ES_ES]: DFESVoiceLanguageCode.ES_ES,
  [DFESLocale.ES_419]: DFESVoiceLanguageCode.ES_ES,

  [DFESLocale.FR_FR]: DFESVoiceLanguageCode.FR_FR,
  [DFESLocale.FR_CA]: DFESVoiceLanguageCode.FR_CA,
  [DFESLocale.FR_BE]: DFESVoiceLanguageCode.FR_FR,

  [DFESLocale.HI_IN]: DFESVoiceLanguageCode.HI_IN,

  [DFESLocale.ID_ID]: DFESVoiceLanguageCode.ID_ID,

  [DFESLocale.IT_IT]: DFESVoiceLanguageCode.IT_IT,

  [DFESLocale.JA_JP]: DFESVoiceLanguageCode.JA_JP,

  [DFESLocale.KO_KR]: DFESVoiceLanguageCode.KO_KR,

  [DFESLocale.NO_NO]: DFESVoiceLanguageCode.NB_NO,

  [DFESLocale.PL_PL]: DFESVoiceLanguageCode.PL_PL,

  [DFESLocale.PT_BR]: DFESVoiceLanguageCode.PT_BR,

  [DFESLocale.RU_RU]: DFESVoiceLanguageCode.RU_RU,

  [DFESLocale.SV_SE]: DFESVoiceLanguageCode.SV_SE,

  [DFESLocale.TH_TH]: DFESVoiceLanguageCode.TH_TH,

  [DFESLocale.TR_TR]: DFESVoiceLanguageCode.TR_TR,

  [DFESLocale.ZH_TW]: DFESVoiceLanguageCode.CMN_TW,

  [DFESLocale.ZH_HK]: DFESVoiceLanguageCode.YUQ_HK,
};
