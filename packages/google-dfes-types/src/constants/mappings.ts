import { GoogleConstants } from '@voiceflow/google-types';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { Locale } from './locales';
import { SlotType } from './slots';

export const DIALOGFLOW_TO_VOICEFLOW_LOCALE_MAP: Record<Locale, VoiceflowConstants.Locale> = {
  [Locale.ZH_HK]: VoiceflowConstants.Locale.ZH_CN,
  [Locale.ZH_TW]: VoiceflowConstants.Locale.ZH_CN,
  [Locale.ZH_CN]: VoiceflowConstants.Locale.ZH_CN,
  [Locale.NL]: VoiceflowConstants.Locale.NL_NL,
  [Locale.EN_AU]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_CA]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_GB]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_IN]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_US]: VoiceflowConstants.Locale.EN_US,
  [Locale.FR_CA]: VoiceflowConstants.Locale.FR_CA,
  [Locale.FR_FR]: VoiceflowConstants.Locale.FR_FR,
  [Locale.DE]: VoiceflowConstants.Locale.DE_DE,
  [Locale.HI]: VoiceflowConstants.Locale.HI_IN,
  [Locale.ID]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.IT]: VoiceflowConstants.Locale.IT_IT,
  [Locale.JA]: VoiceflowConstants.Locale.JA_JP,
  [Locale.KO]: VoiceflowConstants.Locale.KO_KR,
  [Locale.NO]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.PL]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.PT_BR]: VoiceflowConstants.Locale.PT_BR,
  [Locale.RU]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.ES_ES]: VoiceflowConstants.Locale.ES_ES,
  [Locale.ES_419]: VoiceflowConstants.Locale.ES_ES,
  [Locale.SV]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.TH]: VoiceflowConstants.Locale.EN_US, // FIXME: Unsupported language by LUIS
  [Locale.TR]: VoiceflowConstants.Locale.TR_TR,
  [Locale.BN_BD]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.BN_IN]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.FIL_PH]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.FI_FI]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.MS]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.MS_MY]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.MR]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.MR_IN]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.PT]: VoiceflowConstants.Locale.PT_BR,
  [Locale.RO]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.RO_RO]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.SI]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.SI_LK]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.TA_IN]: VoiceflowConstants.Locale.TA_IN,
  [Locale.TA_LK]: VoiceflowConstants.Locale.TA_IN,
  [Locale.TA_MY]: VoiceflowConstants.Locale.TA_IN,
  [Locale.TA_SG]: VoiceflowConstants.Locale.TA_IN,
  [Locale.TE_IN]: VoiceflowConstants.Locale.TA_IN,
  [Locale.UK]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.DA_DK]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
  [Locale.VI_VN]: VoiceflowConstants.Locale.EN_US, // FIXME: Dialogflow locale doesnt exist in general
};

export const VOICEFLOW_TO_DIALOGFLOW_LOCALE_MAP: Record<VoiceflowConstants.Locale, Locale> = {
  [VoiceflowConstants.Locale.AR_AR]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.BG_BG]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.CA_ES]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.CS_CZ]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.DA_DK]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.DE_DE]: Locale.DE,
  [VoiceflowConstants.Locale.EN_US]: Locale.EN_US,
  [VoiceflowConstants.Locale.ES_ES]: Locale.ES_ES,
  [VoiceflowConstants.Locale.ES_MX]: Locale.ES_419,
  [VoiceflowConstants.Locale.ET_EE]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.FR_CA]: Locale.FR_CA,
  [VoiceflowConstants.Locale.FR_FR]: Locale.FR_FR,
  [VoiceflowConstants.Locale.GU_IN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.HE_IL]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.HI_IN]: Locale.HI,
  [VoiceflowConstants.Locale.HU_HU]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.IT_IT]: Locale.IT,
  [VoiceflowConstants.Locale.JA_JP]: Locale.JA,
  [VoiceflowConstants.Locale.KO_KR]: Locale.KO,
  [VoiceflowConstants.Locale.MR_IN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.NL_BE]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.NL_NL]: Locale.NL,
  [VoiceflowConstants.Locale.PL_PL]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.PT_BR]: Locale.PT_BR,
  [VoiceflowConstants.Locale.PT_PT]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.RO_RO]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.RU_RU]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.TA_IN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.TE_IN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.TR_TR]: Locale.TR,
  [VoiceflowConstants.Locale.UK_UA]: Locale.EN_US, // FIXME: Unsupported language by Google,
  [VoiceflowConstants.Locale.VI_VN]: Locale.EN_US, // FIXME: Unsupported language by Google
  [VoiceflowConstants.Locale.ZH_CN]: Locale.ZH_TW,
  [VoiceflowConstants.Locale.ZH_TW]: Locale.EN_US, // FIXME: Unsupported language by Google,
};

export const GOOGLE_TO_DIALOGFLOW_LOCALE_MAP: Record<GoogleConstants.Locale, Locale> = {
  [GoogleConstants.Locale.ZH_HK]: Locale.ZH_HK,
  [GoogleConstants.Locale.ZH_TW]: Locale.ZH_TW,
  [GoogleConstants.Locale.DA_DK]: Locale.DA_DK,
  [GoogleConstants.Locale.NL_NL]: Locale.NL,
  [GoogleConstants.Locale.EN_AU]: Locale.EN_AU,
  [GoogleConstants.Locale.EN_CA]: Locale.EN_CA,
  [GoogleConstants.Locale.EN_GB]: Locale.EN_GB,
  [GoogleConstants.Locale.EN_IN]: Locale.EN_IN,
  [GoogleConstants.Locale.EN_BE]: Locale.EN_US,
  [GoogleConstants.Locale.EN_SG]: Locale.EN_US,
  [GoogleConstants.Locale.EN_US]: Locale.EN_US,
  [GoogleConstants.Locale.FR_FR]: Locale.FR_FR,
  [GoogleConstants.Locale.FR_CA]: Locale.FR_CA,
  [GoogleConstants.Locale.FR_BE]: Locale.FR_FR,
  [GoogleConstants.Locale.DE_DE]: Locale.DE,
  [GoogleConstants.Locale.DE_AT]: Locale.DE,
  [GoogleConstants.Locale.DE_CH]: Locale.DE,
  [GoogleConstants.Locale.DE_BE]: Locale.DE,
  [GoogleConstants.Locale.HI_IN]: Locale.HI,
  [GoogleConstants.Locale.ID_ID]: Locale.ID,
  [GoogleConstants.Locale.IT_IT]: Locale.IT,
  [GoogleConstants.Locale.JA_JP]: Locale.JA,
  [GoogleConstants.Locale.KO_KR]: Locale.KO,
  [GoogleConstants.Locale.NO_NO]: Locale.NO,
  [GoogleConstants.Locale.PL_PL]: Locale.PL,
  [GoogleConstants.Locale.PT_BR]: Locale.PT_BR,
  [GoogleConstants.Locale.RU_RU]: Locale.RU,
  [GoogleConstants.Locale.ES_ES]: Locale.ES_ES,
  [GoogleConstants.Locale.ES_419]: Locale.ES_419,
  [GoogleConstants.Locale.SV_SE]: Locale.SV,
  [GoogleConstants.Locale.TH_TH]: Locale.TH,
  [GoogleConstants.Locale.TR_TR]: Locale.TR,
  [GoogleConstants.Locale.NL_BE]: Locale.NL,
};

export const DIALOGFLOW_TO_VOICEFLOW_SLOT_TYPE_MAP: Record<SlotType, VoiceflowConstants.SlotType> = {
  [SlotType.ADDRESS]: VoiceflowConstants.SlotType.GEOGRAPHY,
  [SlotType.AGE]: VoiceflowConstants.SlotType.AGE,
  [SlotType.CARDINAL]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.CURRENCY_NAME]: VoiceflowConstants.SlotType.CURRENCY,
  [SlotType.DATE]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.DATE_PERIOD]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.DATE_TIME]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.DURATION]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.EMAIL]: VoiceflowConstants.SlotType.EMAIL,
  [SlotType.GEO_CAPITAL]: VoiceflowConstants.SlotType.GEOGRAPHY,
  [SlotType.GEO_CITY]: VoiceflowConstants.SlotType.GEOGRAPHY,
  [SlotType.GEO_COUNTRY]: VoiceflowConstants.SlotType.GEOGRAPHY,
  [SlotType.GEO_COUNTRY_CODE]: VoiceflowConstants.SlotType.GEOGRAPHY,
  [SlotType.GEO_STATE]: VoiceflowConstants.SlotType.GEOGRAPHY,
  [SlotType.NUMBER]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.NUMBER_INTEGER]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.NUMBER_SEQUENCE]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.ORDINAL]: VoiceflowConstants.SlotType.ORDINAL,
  [SlotType.PERCENTAGE]: VoiceflowConstants.SlotType.PERCENTAGE,
  [SlotType.PERSON]: VoiceflowConstants.SlotType.NAME,
  [SlotType.PHONE_NUMBER]: VoiceflowConstants.SlotType.PHONENUMBER,
  [SlotType.TEMPERATURE]: VoiceflowConstants.SlotType.TEMPERATURE,
  [SlotType.TIME]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.URL]: VoiceflowConstants.SlotType.URL,
  [SlotType.TIME_PERIOD]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.FLIGHT_NUMBER]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.UNIT_AREA]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.UNIT_AREA_NAME]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.UNIT_CURRENCY]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.UNIT_INFORMATION]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.UNIT_INFORMATION_NAME]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.UNIT_LENGTH]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.UNIT_LENGTH_NAME]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.UNIT_SPEED]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.UNIT_SPEED_NAME]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.UNIT_VOLUME]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.UNIT_VOLUME_NAME]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.UNIT_WEIGHT]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.UNIT_WEIGHT_NAME]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.ZIP_CODE]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.AIRPORT]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.LOCATION]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.PLACE_ATTRACTION]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.MUSIC_ARTIST]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.MUSIC_GENRE]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.COLOR]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.LANGUAGE]: VoiceflowConstants.SlotType.CUSTOM,
  [SlotType.ANY]: VoiceflowConstants.SlotType.CUSTOM,
};

export const VIUCEFLOW_TO_DIALOGFLOW_SLOT_TYPE_MAP: Record<VoiceflowConstants.SlotType, SlotType> = {
  [VoiceflowConstants.SlotType.GEOGRAPHY]: SlotType.ADDRESS,
  [VoiceflowConstants.SlotType.AGE]: SlotType.AGE,
  [VoiceflowConstants.SlotType.NUMBER]: SlotType.NUMBER,
  [VoiceflowConstants.SlotType.CURRENCY]: SlotType.CURRENCY_NAME,
  [VoiceflowConstants.SlotType.DATETIME]: SlotType.DATE_TIME,
  [VoiceflowConstants.SlotType.EMAIL]: SlotType.EMAIL,
  [VoiceflowConstants.SlotType.ORDINAL]: SlotType.ORDINAL,
  [VoiceflowConstants.SlotType.PERCENTAGE]: SlotType.PERCENTAGE,
  [VoiceflowConstants.SlotType.NAME]: SlotType.PERSON,
  [VoiceflowConstants.SlotType.PHONENUMBER]: SlotType.PHONE_NUMBER,
  [VoiceflowConstants.SlotType.TEMPERATURE]: SlotType.TEMPERATURE,
  [VoiceflowConstants.SlotType.URL]: SlotType.URL,
  [VoiceflowConstants.SlotType.CUSTOM]: SlotType.ANY,
  [VoiceflowConstants.SlotType.DIMENSION]: SlotType.ANY,
  [VoiceflowConstants.SlotType.NATOAPCO]: SlotType.ANY,
  [VoiceflowConstants.SlotType.KEY_PHRASE]: SlotType.ANY,
};

export const GOOGLE_TO_DIALOGFLOW_SLOT_TYPE_MAP: Record<GoogleConstants.SlotType, SlotType> = {
  [GoogleConstants.SlotType.DATE]: SlotType.DATE,
  [GoogleConstants.SlotType.DATE_TIME]: SlotType.DATE_TIME,
  [GoogleConstants.SlotType.NUMBER]: SlotType.NUMBER,
  [GoogleConstants.SlotType.TIME]: SlotType.TIME,
};
