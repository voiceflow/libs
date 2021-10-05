export enum Language {
  BN = 'bn',
  DA = 'da',
  DE = 'de',
  ES = 'es',
  FI = 'fi',
  FIL = 'fil',
  FR = 'fr',
  HI = 'hi',
  ID = 'id',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  MR = 'mr',
  MS = 'ms',
  NL = 'nl',
  NO = 'no',
  PL = 'pl',
  PT = 'pt',
  BR = 'pt-br',
  RO = 'ro',
  RU = 'ru',
  SI = 'si',
  SV = 'sv',
  TA = 'ta',
  TE = 'te',
  TH = 'th',
  TR = 'tr',
  UK = 'uk',
  VI = 'vi',
  CN = 'zh-cn',
  HK = 'zh-hk',
  TW = 'zh-tw',
  EN = 'en',
}

export enum Locale {
  // Bengali
  BN_BD = 'bn-BD',
  BN_IN = 'bn-IN',

  // Chinese
  ZH_HK = 'zh-HK',
  ZH_CN = 'zh-CN',
  ZH_TW = 'zh-TW',

  // Danish
  DA_DK = 'da-DK',

  // Dutch
  NL = 'nl',

  // Filipino
  FIL_PH = 'fil-PH',

  // Finnish
  FI_FI = 'fi-FI',

  // English
  EN_AU = 'en-AU',
  EN_CA = 'en-CA',
  EN_GB = 'en-GB',
  EN_IN = 'en-IN',
  EN_US = 'en-US',

  // French
  FR_CA = 'fr-CA',
  FR_FR = 'fr-FR',

  // German
  DE = 'de',

  // Hindi
  HI = 'hi',

  // Indonasian
  ID = 'id',

  // Italian
  IT = 'it',

  // Japanese
  JA = 'ja',

  // Korean
  KO = 'ko',

  // Malay
  MS = 'ms',
  MS_MY = 'ms-MY',

  // Marathi
  MR = 'mr',
  MR_IN = 'mr-IN',

  // Norwegian
  NO = 'no',

  // Polish
  PL = 'pl',

  // Portugese
  PT_BR = 'pt-BR',
  PT = 'pt',

  // Romanian
  RO = 'ro',
  RO_RO = 'ro-RO',

  // Russian
  RU = 'ru',

  // Sinhala
  SI = 'si',
  SI_LK = 'si-LK',

  // Spanish
  ES_419 = 'es-419',
  ES_ES = 'es-ES',

  // Swedish
  SV = 'sv',

  // Tamil
  TA_IN = 'ta-IN',
  TA_LK = 'ta-LK',
  TA_MY = 'ta-MY',
  TA_SG = 'ta-SG',

  // Telugu
  TE_IN = 'te-IN',

  // Thai
  TH = 'th',

  // Turkish
  TR = 'tr',

  // Ukrainian
  UK = 'uk',

  // Vietnamese
  VI_VN = 'vi-VN',
}

export const LanguageToLocale: Record<Language, Locale[]> = {
  [Language.BN]: [Locale.BN_BD, Locale.BN_IN],
  [Language.DA]: [Locale.DA_DK],
  [Language.CN]: [Locale.ZH_CN],
  [Language.HK]: [Locale.ZH_HK],
  [Language.TW]: [Locale.ZH_TW],
  [Language.NL]: [Locale.NL],
  [Language.EN]: [Locale.EN_US, Locale.EN_AU, Locale.EN_CA, Locale.EN_GB, Locale.EN_IN],
  [Language.FIL]: [Locale.FIL_PH],
  [Language.FI]: [Locale.FI_FI],
  [Language.FR]: [Locale.FR_CA, Locale.FR_FR],
  [Language.DE]: [Locale.DE],
  [Language.HI]: [Locale.HI],
  [Language.ID]: [Locale.ID],
  [Language.IT]: [Locale.IT],
  [Language.JA]: [Locale.JA],
  [Language.KO]: [Locale.KO],
  [Language.MS]: [Locale.MS],
  [Language.MR]: [Locale.MR],
  [Language.NO]: [Locale.NO],
  [Language.PL]: [Locale.PL],
  [Language.PT]: [Locale.PT],
  [Language.BR]: [Locale.PT_BR],
  [Language.RO]: [Locale.RO],
  [Language.RU]: [Locale.RU],
  [Language.SI]: [Locale.SI],
  [Language.ES]: [Locale.ES_ES, Locale.ES_419],
  [Language.SV]: [Locale.SV],
  [Language.TA]: [Locale.TA_IN, Locale.TA_LK, Locale.TA_SG, Locale.TA_MY],
  [Language.TE]: [Locale.TE_IN],
  [Language.TH]: [Locale.TH],
  [Language.TR]: [Locale.TR],
  [Language.UK]: [Locale.UK],
  [Language.VI]: [Locale.VI_VN],
};

export enum VoiceLanguageCode {
  YUE_HK = 'yue-HK',
  CMN_CN = 'cmn-CN',
  NL_NL = 'nl-NL',
  EN_US = 'en-US',
  EN_AU = 'en-AU',
  EN_GB = 'en-GB',
  EN_IN = 'en-IN',
  FR_FR = 'fr-FR',
  FR_CA = 'fr-CA',
  DE_DE = 'de-DE',
  HI_IN = 'hi-IN',
  ID_ID = 'id-ID',
  IT_IT = 'it-IT',
  JA_JP = 'ja-JP',
  KO_KR = 'ko-KR',
  NB_NO = 'nb-NO',
  PL_PL = 'pl-PL',
  PT_BR = 'pt-BR',
  PT_PT = 'pt-PT',
  RU_RU = 'ru-RU',
  ES_ES = 'es-ES',
  SV_SE = 'sv-SE',
  TR_TR = 'tr-TR',
  UK_UA = 'uk-UA',
  DA_DK = 'da-DK',
}

export const LocaleToVoiceLanguageCode: { [keyof in Locale]?: VoiceLanguageCode } = {
  [Locale.ZH_HK]: VoiceLanguageCode.YUE_HK,
  [Locale.ZH_CN]: VoiceLanguageCode.CMN_CN,
  [Locale.DA_DK]: VoiceLanguageCode.DA_DK,
  [Locale.NL]: VoiceLanguageCode.NL_NL,
  [Locale.EN_US]: VoiceLanguageCode.EN_US,
  [Locale.EN_AU]: VoiceLanguageCode.EN_AU,
  [Locale.EN_GB]: VoiceLanguageCode.EN_GB,
  [Locale.EN_IN]: VoiceLanguageCode.EN_IN,
  [Locale.EN_US]: VoiceLanguageCode.EN_US,
  [Locale.FR_CA]: VoiceLanguageCode.FR_CA,
  [Locale.FR_FR]: VoiceLanguageCode.FR_FR,
  [Locale.DE]: VoiceLanguageCode.DE_DE,
  [Locale.HI]: VoiceLanguageCode.HI_IN,
  [Locale.ID]: VoiceLanguageCode.ID_ID,
  [Locale.IT]: VoiceLanguageCode.IT_IT,
  [Locale.JA]: VoiceLanguageCode.JA_JP,
  [Locale.KO]: VoiceLanguageCode.KO_KR,
  [Locale.NO]: VoiceLanguageCode.NB_NO,
  [Locale.PL]: VoiceLanguageCode.PL_PL,
  [Locale.PT_BR]: VoiceLanguageCode.PT_BR,
  [Locale.PT]: VoiceLanguageCode.PT_PT,
  [Locale.RU]: VoiceLanguageCode.RU_RU,
  [Locale.ES_ES]: VoiceLanguageCode.ES_ES,
  [Locale.SV]: VoiceLanguageCode.SV_SE,
  [Locale.TR]: VoiceLanguageCode.TR_TR,
  [Locale.UK]: VoiceLanguageCode.UK_UA,
};
