import { Language, Locale } from '@/types';

// eslint-disable-next-line import/prefer-default-export
export const LanguageToLocale = {
  [Language.DA]: [Locale.DA_DK],
  [Language.DE]: [Locale.DE_DE, Locale.DE_AT, Locale.DE_CH, Locale.DE_BE],
  [Language.EN]: [Locale.EN_US, Locale.EN_AU, Locale.EN_CA, Locale.EN_GB, Locale.EN_IN, Locale.EN_BE, Locale.EN_SG],
  [Language.ES]: [Locale.ES_ES, Locale.ES_419],
  [Language.FR]: [Locale.FE_FR, Locale.FE_CA, Locale.FE_BE],
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
