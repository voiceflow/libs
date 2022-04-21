import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { SlotType } from './slots';

export const DialogflowESToVoiceflowSlotMap = new Map<SlotType, VoiceflowConstants.SlotType>([
  [SlotType.ADDRESS, VoiceflowConstants.SlotType.GEOGRAPHY],
  [SlotType.AGE, VoiceflowConstants.SlotType.AGE],
  [SlotType.CARDINAL, VoiceflowConstants.SlotType.NUMBER],
  [SlotType.CURRENCY_NAME, VoiceflowConstants.SlotType.CURRENCY],
  [SlotType.DATE, VoiceflowConstants.SlotType.DATETIME],
  [SlotType.DATE_PERIOD, VoiceflowConstants.SlotType.DATETIME],
  [SlotType.DATE_TIME, VoiceflowConstants.SlotType.DATETIME],
  [SlotType.DURATION, VoiceflowConstants.SlotType.DATETIME],
  [SlotType.EMAIL, VoiceflowConstants.SlotType.EMAIL],
  [SlotType.GEO_CAPITAL, VoiceflowConstants.SlotType.GEOGRAPHY],
  [SlotType.GEO_CITY, VoiceflowConstants.SlotType.GEOGRAPHY],
  [SlotType.GEO_COUNTRY, VoiceflowConstants.SlotType.GEOGRAPHY],
  [SlotType.GEO_COUNTRY_CODE, VoiceflowConstants.SlotType.GEOGRAPHY],
  [SlotType.GEO_STATE, VoiceflowConstants.SlotType.GEOGRAPHY],
  [SlotType.NUMBER, VoiceflowConstants.SlotType.NUMBER],
  [SlotType.NUMBER_INTEGER, VoiceflowConstants.SlotType.NUMBER],
  [SlotType.NUMBER_SEQUENCE, VoiceflowConstants.SlotType.NUMBER],
  [SlotType.ORDINAL, VoiceflowConstants.SlotType.ORDINAL],
  [SlotType.PERCENTAGE, VoiceflowConstants.SlotType.PERCENTAGE],
  [SlotType.PERSON, VoiceflowConstants.SlotType.NAME],
  [SlotType.PHONE_NUMBER, VoiceflowConstants.SlotType.PHONENUMBER],
  [SlotType.TEMPERATURE, VoiceflowConstants.SlotType.TEMPERATURE],
  [SlotType.TIME, VoiceflowConstants.SlotType.DATETIME],
  [SlotType.URL, VoiceflowConstants.SlotType.URL],
]);
