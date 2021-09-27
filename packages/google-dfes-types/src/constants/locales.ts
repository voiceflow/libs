export enum Language {
  BN = 'bn',
  ZH = 'zh',
  NL = 'nl',
  EN = 'en',
  FIL = 'fil',
  FI = 'fi',
  FR = 'fr',
  DE = 'de',
  HI = 'hi',
  ID = 'id',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  MS = 'ms',
  MR = 'mr',
  NO = 'no',
  PL = 'pl',
  PT = 'pt',
  RO = 'ro',
  RU = 'ru',
  SI = 'si',
  ES = 'es',
  SV = 'sv',
  TA = 'ta',
  TE = 'te',
  TH = 'th',
  TR = 'tr',
  UK = 'uk',
  VI = 'vi',
}

export enum Locale {
  // Bengali
  BN = 'bn',

  // Chinese
  ZH_HK = 'zh-HK',
  ZH_CN = 'zh-CN',
  ZH_TW = 'zh-TW',

  // Dutch
  NL = 'nl',

  // Filipino
  FIL = 'fil',

  // Finnish
  FI = 'fi',

  // English
  EN = 'en',

  // French
  FR = 'fr',

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

  // Marathi
  MR = 'mr',

  // Norwegian
  NO = 'no',

  // Polish
  PL = 'pl',

  // Portugese
  PT_BR = 'pt-BR',
  PT = 'pt',

  // Romanian
  RO = 'ro',

  // Russian
  RU = 'ru',

  // Sinhala
  SI = 'si',

  // Spanish
  ES = 'es',

  // Swedish
  SV = 'sv',

  // Tamil
  TA = 'ta',

  // Telugu
  TE = 'te',

  // Thai
  TH = 'th',

  // Turkish
  TR = 'tr',

  // Ukrainian
  UK = 'uk',

  // Vietnamese
  VI = 'vi',
}

export const LanguageToLocale: Record<Language, Locale[]> = {
  [Language.BN]: [Locale.BN],
  [Language.ZH]: [Locale.ZH_CN, Locale.ZH_HK, Locale.ZH_TW],
  [Language.NL]: [Locale.NL],
  [Language.EN]: [Locale.EN],
  [Language.FIL]: [Locale.FIL],
  [Language.FI]: [Locale.FI],
  [Language.FR]: [Locale.FR],
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
  [Language.PT]: [Locale.PT, Locale.PT_BR],
  [Language.RO]: [Locale.RO],
  [Language.RU]: [Locale.RU],
  [Language.SI]: [Locale.SI],
  [Language.ES]: [Locale.ES],
  [Language.SV]: [Locale.SV],
  [Language.TA]: [Locale.TA],
  [Language.TE]: [Locale.TE],
  [Language.TH]: [Locale.TH],
  [Language.TR]: [Locale.TR],
  [Language.UK]: [Locale.UK],
  [Language.VI]: [Locale.VI],
};

export enum VoiceLanguageCode {
  BN_IN = 'bn-IN',
  YUE_HK = 'yue-HK',
  CMN_CN = 'cmn-CN',
  CMN_TW = 'cmn-TW',
  NL_NL = 'nl-NL',
  EN_US = 'en-US',
  FIL_PH = 'fil-PH',
  FI_FI = 'fi-FI',
  FR_FR = 'fr-FR',
  DE_DE = 'de-DE',
  HI_IN = 'hi-IN',
  ID_ID = 'id-ID',
  IT_IT = 'it-IT',
  JA_JP = 'ja-JP',
  KO_KR = 'ko-KR',
  MS_MY = 'ms-MY',
  NB_NO = 'nb-NO',
  PL_PL = 'pl-PL',
  PT_BR = 'pt-BR',
  PT_PT = 'pt-PT',
  RO_RO = 'ro-RO',
  RU_RU = 'ru-RU',
  ES_ES = 'es-ES',
  SV_SE = 'sv-SE',
  TA_IN = 'ta-IN',
  TE_IN = 'te-IN',
  TH_TH = 'th-TH',
  TR_TR = 'tr-TR',
  UK_UA = 'uk-UA',
  VI_VN = 'vi-VN',
}

export const LocaleToVoiceLanguageCode: { [keyof in Locale]?: VoiceLanguageCode } = {
  [Locale.BN]: VoiceLanguageCode.BN_IN,

  [Locale.ZH_HK]: VoiceLanguageCode.YUE_HK,
  [Locale.ZH_CN]: VoiceLanguageCode.CMN_CN,
  [Locale.ZH_TW]: VoiceLanguageCode.CMN_TW,

  [Locale.NL]: VoiceLanguageCode.NL_NL,

  [Locale.EN]: VoiceLanguageCode.EN_US,

  [Locale.FIL]: VoiceLanguageCode.FIL_PH,

  [Locale.FI]: VoiceLanguageCode.FI_FI,

  [Locale.FR]: VoiceLanguageCode.FR_FR,

  [Locale.DE]: VoiceLanguageCode.DE_DE,

  [Locale.HI]: VoiceLanguageCode.HI_IN,

  [Locale.ID]: VoiceLanguageCode.ID_ID,

  [Locale.IT]: VoiceLanguageCode.IT_IT,

  [Locale.JA]: VoiceLanguageCode.JA_JP,

  [Locale.KO]: VoiceLanguageCode.KO_KR,

  [Locale.MS]: VoiceLanguageCode.MS_MY,

  [Locale.NO]: VoiceLanguageCode.NB_NO,

  [Locale.PL]: VoiceLanguageCode.PL_PL,
  [Locale.PT]: VoiceLanguageCode.PT_PT,

  [Locale.PT_BR]: VoiceLanguageCode.PT_BR,

  [Locale.RO]: VoiceLanguageCode.RO_RO,

  [Locale.RU]: VoiceLanguageCode.RU_RU,

  [Locale.ES]: VoiceLanguageCode.ES_ES,

  [Locale.SV]: VoiceLanguageCode.SV_SE,

  [Locale.TA]: VoiceLanguageCode.TA_IN,

  [Locale.TE]: VoiceLanguageCode.TE_IN,

  [Locale.TH]: VoiceLanguageCode.TH_TH,

  [Locale.TR]: VoiceLanguageCode.TR_TR,

  [Locale.UK]: VoiceLanguageCode.UK_UA,

  [Locale.VI]: VoiceLanguageCode.VI_VN,
};
