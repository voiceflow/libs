import { Constants as General } from '@voiceflow/general-types';

import { Locale } from './base';
import { AmazonIntent } from './intents';
import { SlotType } from './slots';

export const AmazonToGeneralIntentMap: Partial<Record<AmazonIntent, General.IntentName>> = {
  [AmazonIntent.NO]: General.IntentName.NO,
  [AmazonIntent.YES]: General.IntentName.YES,
  [AmazonIntent.STOP]: General.IntentName.STOP,
  [AmazonIntent.NEXT]: General.IntentName.NEXT,
  [AmazonIntent.HELP]: General.IntentName.HELP,
  [AmazonIntent.PAUSE]: General.IntentName.PAUSE,
  [AmazonIntent.CANCEL]: General.IntentName.CANCEL,
  [AmazonIntent.RESUME]: General.IntentName.RESUME,
  [AmazonIntent.REPEAT]: General.IntentName.REPEAT,
  [AmazonIntent.FALLBACK]: General.IntentName.NONE,
  [AmazonIntent.PREVIOUS]: General.IntentName.PREVIOUS,
  [AmazonIntent.START_OVER]: General.IntentName.START_OVER,
};

export const GeneralToAmazonIntentMap: Partial<Record<General.IntentName, AmazonIntent>> = {
  [General.IntentName.NO]: AmazonIntent.NO,
  [General.IntentName.YES]: AmazonIntent.YES,
  [General.IntentName.STOP]: AmazonIntent.STOP,
  [General.IntentName.NEXT]: AmazonIntent.NEXT,
  [General.IntentName.HELP]: AmazonIntent.HELP,
  [General.IntentName.PAUSE]: AmazonIntent.PAUSE,
  [General.IntentName.CANCEL]: AmazonIntent.CANCEL,
  [General.IntentName.RESUME]: AmazonIntent.RESUME,
  [General.IntentName.REPEAT]: AmazonIntent.REPEAT,
  [General.IntentName.NONE]: AmazonIntent.FALLBACK,
  [General.IntentName.PREVIOUS]: AmazonIntent.PREVIOUS,
  [General.IntentName.START_OVER]: AmazonIntent.START_OVER,
};

export const AmazonToGeneralSlotMap: Partial<Record<SlotType, General.SlotType>> = {
  [SlotType.TIME]: General.SlotType.DATETIME,
  [SlotType.DATE]: General.SlotType.DATETIME,
  [SlotType.FOUR_DIGIT_NUMBER]: General.SlotType.NUMBER,
  [SlotType.NUMBER]: General.SlotType.NUMBER,
  [SlotType.PHONENUMBER]: General.SlotType.PHONENUMBER,
  [SlotType.PERSON]: General.SlotType.NAME,
  [SlotType.DE_FIRST_NAME]: General.SlotType.NAME,
  [SlotType.GB_FIRST_NAME]: General.SlotType.NAME,
  [SlotType.US_FIRST_NAME]: General.SlotType.NAME,
  [SlotType.FIRSTNAME]: General.SlotType.NAME,
  [SlotType.ORDINAL]: General.SlotType.ORDINAL,
};

export const GeneralToAmazonSlotMap: Partial<Record<General.SlotType, SlotType>> = {
  [General.SlotType.DATETIME]: SlotType.DATE,
  [General.SlotType.NUMBER]: SlotType.NUMBER,
  [General.SlotType.PHONENUMBER]: SlotType.PHONENUMBER,
  [General.SlotType.NAME]: SlotType.FIRSTNAME,
  [General.SlotType.ORDINAL]: SlotType.ORDINAL,
};

export const AmazonToGeneralLocaleMap: Record<Locale, General.Locale> = {
  [Locale.EN_US]: General.Locale.EN_US,
  [Locale.EN_AU]: General.Locale.EN_US,
  [Locale.EN_CA]: General.Locale.EN_US,
  [Locale.EN_IN]: General.Locale.EN_US,
  [Locale.EN_GB]: General.Locale.EN_US,
  [Locale.FR_CA]: General.Locale.FR_CA,
  [Locale.ES_US]: General.Locale.ES_ES,
  [Locale.FR_FR]: General.Locale.FR_FR,
  [Locale.DE_DE]: General.Locale.DE_DE,
  [Locale.IT_IT]: General.Locale.IT_IT,
  [Locale.JA_JP]: General.Locale.JA_JP,
  [Locale.ES_ES]: General.Locale.ES_ES,
  [Locale.ES_MX]: General.Locale.ES_MX,
  [Locale.PT_BR]: General.Locale.PT_BR,
  [Locale.HI_IN]: General.Locale.HI_IN,
};

export const GeneralToAmazonLocaleMap: Record<General.Locale, Locale> = {
  [General.Locale.EN_US]: Locale.EN_US,
  [General.Locale.AR_AR]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [General.Locale.ZH_CN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [General.Locale.NL_NL]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [General.Locale.FR_FR]: Locale.FR_FR,
  [General.Locale.FR_CA]: Locale.FR_CA,
  [General.Locale.DE_DE]: Locale.DE_DE,
  [General.Locale.GU_IN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [General.Locale.HI_IN]: Locale.HI_IN,
  [General.Locale.IT_IT]: Locale.IT_IT,
  [General.Locale.JA_JP]: Locale.JA_JP,
  [General.Locale.KO_KR]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [General.Locale.MR_IN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [General.Locale.PT_BR]: Locale.PT_BR,
  [General.Locale.ES_ES]: Locale.ES_ES,
  [General.Locale.ES_MX]: Locale.ES_MX,
  [General.Locale.TA_IN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [General.Locale.TE_IN]: Locale.EN_US, // FIXME: Unsupported language by Alexa
  [General.Locale.TR_TR]: Locale.EN_US, // FIXME: Unsupported language by Alexa
};
