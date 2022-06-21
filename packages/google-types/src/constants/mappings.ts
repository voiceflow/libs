import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { Locale } from './locales';
import { SlotType } from './slots';

export const GOOGLE_TO_VOICEFLOW_LOCALE_MAP: Record<Locale, VoiceflowConstants.Locale> = {
  [Locale.ZH_HK]: VoiceflowConstants.Locale.ZH_CN,
  [Locale.ZH_TW]: VoiceflowConstants.Locale.ZH_CN,
  [Locale.DA_DK]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.NL_NL]: VoiceflowConstants.Locale.NL_NL,
  [Locale.NL_BE]: VoiceflowConstants.Locale.NL_NL,
  [Locale.EN_AU]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_CA]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_GB]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_IN]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_BE]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_SG]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_US]: VoiceflowConstants.Locale.EN_US,
  [Locale.FR_FR]: VoiceflowConstants.Locale.FR_FR,
  [Locale.FR_CA]: VoiceflowConstants.Locale.FR_CA,
  [Locale.FR_BE]: VoiceflowConstants.Locale.FR_FR,
  [Locale.DE_DE]: VoiceflowConstants.Locale.DE_DE,
  [Locale.DE_AT]: VoiceflowConstants.Locale.DE_DE,
  [Locale.DE_CH]: VoiceflowConstants.Locale.DE_DE,
  [Locale.DE_BE]: VoiceflowConstants.Locale.DE_DE,
  [Locale.HI_IN]: VoiceflowConstants.Locale.HI_IN,
  [Locale.ID_ID]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.IT_IT]: VoiceflowConstants.Locale.IT_IT,
  [Locale.JA_JP]: VoiceflowConstants.Locale.JA_JP,
  [Locale.KO_KR]: VoiceflowConstants.Locale.KO_KR,
  [Locale.NO_NO]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.PL_PL]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.PT_BR]: VoiceflowConstants.Locale.PT_BR,
  [Locale.RU_RU]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.ES_ES]: VoiceflowConstants.Locale.ES_ES,
  [Locale.ES_419]: VoiceflowConstants.Locale.ES_ES,
  [Locale.SV_SE]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.TH_TH]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.TR_TR]: VoiceflowConstants.Locale.TR_TR,
};

export const VOICEFLOW_TO_GOOGLE_LOCALE_MAP: Record<VoiceflowConstants.Locale, Locale> = {
  [VoiceflowConstants.Locale.EN_US]: Locale.EN_US,
  [VoiceflowConstants.Locale.AR_AR]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.ZH_CN]: Locale.ZH_TW,
  [VoiceflowConstants.Locale.NL_NL]: Locale.NL_NL,
  [VoiceflowConstants.Locale.FR_FR]: Locale.FR_FR,
  [VoiceflowConstants.Locale.FR_CA]: Locale.FR_CA,
  [VoiceflowConstants.Locale.DE_DE]: Locale.DE_DE,
  [VoiceflowConstants.Locale.GU_IN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.HI_IN]: Locale.HI_IN,
  [VoiceflowConstants.Locale.IT_IT]: Locale.IT_IT,
  [VoiceflowConstants.Locale.JA_JP]: Locale.JA_JP,
  [VoiceflowConstants.Locale.KO_KR]: Locale.KO_KR,
  [VoiceflowConstants.Locale.MR_IN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.PT_BR]: Locale.PT_BR,
  [VoiceflowConstants.Locale.ES_ES]: Locale.ES_ES,
  [VoiceflowConstants.Locale.ES_MX]: Locale.ES_419,
  [VoiceflowConstants.Locale.TA_IN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.TE_IN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.TR_TR]: Locale.TR_TR,
};

export const GOOGLE_TO_VOICEFLOW_SLOT_TYPE_MAP: Record<SlotType, VoiceflowConstants.SlotType> = {
  [SlotType.TIME]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.DATE]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.NUMBER]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.DATE_TIME]: VoiceflowConstants.SlotType.DATETIME,
};
