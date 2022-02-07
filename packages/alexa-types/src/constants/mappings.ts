import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { Locale } from './base';
import { AmazonIntent } from './intents';
import { SlotType } from './slots';

export const AmazonToVoiceflowIntentMap: Partial<Record<AmazonIntent, VoiceflowConstants.IntentName>> = {
  [AmazonIntent.NO]: VoiceflowConstants.IntentName.NO,
  [AmazonIntent.YES]: VoiceflowConstants.IntentName.YES,
  [AmazonIntent.STOP]: VoiceflowConstants.IntentName.STOP,
  [AmazonIntent.NEXT]: VoiceflowConstants.IntentName.NEXT,
  [AmazonIntent.HELP]: VoiceflowConstants.IntentName.HELP,
  [AmazonIntent.PAUSE]: VoiceflowConstants.IntentName.PAUSE,
  [AmazonIntent.CANCEL]: VoiceflowConstants.IntentName.CANCEL,
  [AmazonIntent.RESUME]: VoiceflowConstants.IntentName.RESUME,
  [AmazonIntent.REPEAT]: VoiceflowConstants.IntentName.REPEAT,
  [AmazonIntent.FALLBACK]: VoiceflowConstants.IntentName.NONE,
  [AmazonIntent.PREVIOUS]: VoiceflowConstants.IntentName.PREVIOUS,
  [AmazonIntent.START_OVER]: VoiceflowConstants.IntentName.START_OVER,
};

export const VoiceflowToAmazonIntentMap: Partial<Record<VoiceflowConstants.IntentName, AmazonIntent>> = {
  [VoiceflowConstants.IntentName.NO]: AmazonIntent.NO,
  [VoiceflowConstants.IntentName.YES]: AmazonIntent.YES,
  [VoiceflowConstants.IntentName.STOP]: AmazonIntent.STOP,
  [VoiceflowConstants.IntentName.NEXT]: AmazonIntent.NEXT,
  [VoiceflowConstants.IntentName.HELP]: AmazonIntent.HELP,
  [VoiceflowConstants.IntentName.PAUSE]: AmazonIntent.PAUSE,
  [VoiceflowConstants.IntentName.CANCEL]: AmazonIntent.CANCEL,
  [VoiceflowConstants.IntentName.RESUME]: AmazonIntent.RESUME,
  [VoiceflowConstants.IntentName.REPEAT]: AmazonIntent.REPEAT,
  [VoiceflowConstants.IntentName.NONE]: AmazonIntent.FALLBACK,
  [VoiceflowConstants.IntentName.PREVIOUS]: AmazonIntent.PREVIOUS,
  [VoiceflowConstants.IntentName.START_OVER]: AmazonIntent.START_OVER,
};

export const AmazonToVoiceflowSlotMap: Partial<Record<SlotType, VoiceflowConstants.SlotType>> = {
  [SlotType.TIME]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.DATE]: VoiceflowConstants.SlotType.DATETIME,
  [SlotType.FOUR_DIGIT_NUMBER]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.NUMBER]: VoiceflowConstants.SlotType.NUMBER,
  [SlotType.PHONENUMBER]: VoiceflowConstants.SlotType.PHONENUMBER,
  [SlotType.PERSON]: VoiceflowConstants.SlotType.NAME,
  [SlotType.DE_FIRST_NAME]: VoiceflowConstants.SlotType.NAME,
  [SlotType.GB_FIRST_NAME]: VoiceflowConstants.SlotType.NAME,
  [SlotType.US_FIRST_NAME]: VoiceflowConstants.SlotType.NAME,
  [SlotType.FIRSTNAME]: VoiceflowConstants.SlotType.NAME,
  [SlotType.ORDINAL]: VoiceflowConstants.SlotType.ORDINAL,
};

export const VoiceflowToAmazonSlotMap: Partial<Record<VoiceflowConstants.SlotType, SlotType>> = {
  [VoiceflowConstants.SlotType.DATETIME]: SlotType.DATE,
  [VoiceflowConstants.SlotType.NUMBER]: SlotType.NUMBER,
  [VoiceflowConstants.SlotType.PHONENUMBER]: SlotType.PHONENUMBER,
  [VoiceflowConstants.SlotType.NAME]: SlotType.FIRSTNAME,
  [VoiceflowConstants.SlotType.ORDINAL]: SlotType.ORDINAL,
};

export const AmazonToVoiceflowLocaleMap: Record<Locale, VoiceflowConstants.Locale> = {
  [Locale.EN_US]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_AU]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_CA]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_IN]: VoiceflowConstants.Locale.EN_US,
  [Locale.EN_GB]: VoiceflowConstants.Locale.EN_US,
  [Locale.FR_CA]: VoiceflowConstants.Locale.FR_CA,
  [Locale.ES_US]: VoiceflowConstants.Locale.ES_ES,
  [Locale.FR_FR]: VoiceflowConstants.Locale.FR_FR,
  [Locale.DE_DE]: VoiceflowConstants.Locale.DE_DE,
  [Locale.IT_IT]: VoiceflowConstants.Locale.IT_IT,
  [Locale.JA_JP]: VoiceflowConstants.Locale.JA_JP,
  [Locale.ES_ES]: VoiceflowConstants.Locale.ES_ES,
  [Locale.ES_MX]: VoiceflowConstants.Locale.ES_MX,
  [Locale.PT_BR]: VoiceflowConstants.Locale.PT_BR,
  [Locale.HI_IN]: VoiceflowConstants.Locale.HI_IN,
};

export const VoiceflowToAmazonLocaleMap: Record<VoiceflowConstants.Locale, Locale> = {
  [VoiceflowConstants.Locale.EN_US]: Locale.EN_US,
  [VoiceflowConstants.Locale.AR_AR]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [VoiceflowConstants.Locale.ZH_CN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [VoiceflowConstants.Locale.NL_NL]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [VoiceflowConstants.Locale.FR_FR]: Locale.FR_FR,
  [VoiceflowConstants.Locale.FR_CA]: Locale.FR_CA,
  [VoiceflowConstants.Locale.DE_DE]: Locale.DE_DE,
  [VoiceflowConstants.Locale.GU_IN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [VoiceflowConstants.Locale.HI_IN]: Locale.HI_IN,
  [VoiceflowConstants.Locale.IT_IT]: Locale.IT_IT,
  [VoiceflowConstants.Locale.JA_JP]: Locale.JA_JP,
  [VoiceflowConstants.Locale.KO_KR]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [VoiceflowConstants.Locale.MR_IN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [VoiceflowConstants.Locale.PT_BR]: Locale.PT_BR,
  [VoiceflowConstants.Locale.ES_ES]: Locale.ES_ES,
  [VoiceflowConstants.Locale.ES_MX]: Locale.ES_MX,
  [VoiceflowConstants.Locale.TA_IN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [VoiceflowConstants.Locale.TE_IN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [VoiceflowConstants.Locale.TR_TR]: Locale.EN_US, // FIXME: Unsupported language by Alexa
};
