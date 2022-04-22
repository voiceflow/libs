import { VoiceflowConstants } from '..';

export enum BuiltInLuisSlotType {
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-age */
  AGE = 'age',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-currency */
  CURRENCY = 'money',
  /** @deprecated @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-deprecated */
  DATETIME = 'datetime',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-datetimev2 */
  DATETIME_V2 = 'datetimeV2',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-dimension */
  DIMENSION = 'dimension',
  /** @deprecated @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-deprecated#encyclopedia-culture */
  ENCYCLOPEDIA = 'encyclopedia',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-email */
  EMAIL = 'email',
  /** @deprecated @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-deprecated#geography-culture */
  GEOGRAPHY = 'geography',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-geographyv2 */
  GEOGRAPHY_V2 = 'geographyV2',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-keyphrase */
  KEY_PHRASE = 'keyPhrase',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-number */
  NUMBER = 'number',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-ordinal */
  ORDINAL = 'ordinal',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-ordinal-v2 */
  ORDINAL_V2 = 'ordinalV2',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-percentage */
  PERCENTAGE = 'percentage',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-person */
  PERSON_NAME = 'personName',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-phonenumber */
  PHONENUMBER = 'phonenumber',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-temperature */
  TEMPERATURE = 'temperature',
  /** @see https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-prebuilt-url */
  URL = 'url',
}

// Maps general type to Luis compatible format
export const GENERAL_SLOT_TYPE_TO_LUIS: ReadonlyMap<VoiceflowConstants.SlotType, BuiltInLuisSlotType> = new Map([
  [VoiceflowConstants.SlotType.AGE, BuiltInLuisSlotType.AGE],
  [VoiceflowConstants.SlotType.CURRENCY, BuiltInLuisSlotType.CURRENCY],
  [VoiceflowConstants.SlotType.DATETIME, BuiltInLuisSlotType.DATETIME_V2],
  [VoiceflowConstants.SlotType.DIMENSION, BuiltInLuisSlotType.DIMENSION],
  [VoiceflowConstants.SlotType.EMAIL, BuiltInLuisSlotType.EMAIL],
  [VoiceflowConstants.SlotType.GEOGRAPHY, BuiltInLuisSlotType.GEOGRAPHY_V2],
  [VoiceflowConstants.SlotType.KEY_PHRASE, BuiltInLuisSlotType.KEY_PHRASE],
  [VoiceflowConstants.SlotType.NAME, BuiltInLuisSlotType.PERSON_NAME],
  [VoiceflowConstants.SlotType.NUMBER, BuiltInLuisSlotType.NUMBER],
  [VoiceflowConstants.SlotType.ORDINAL, BuiltInLuisSlotType.ORDINAL],
  // ORDINAL_V2 doesn't exist in VoiceflowConstants.SlotType currently, might get modified in the future once ORDINAL_V2 gets better language support on LUIS
  // eslint-disable-next-line no-secrets/no-secrets
  // [VoiceflowConstants.SlotType.ORDINAL_V2, BuiltInLuisSlotType.ORDINAL_V2],
  [VoiceflowConstants.SlotType.PERCENTAGE, BuiltInLuisSlotType.PERCENTAGE],
  [VoiceflowConstants.SlotType.PHONENUMBER, BuiltInLuisSlotType.PHONENUMBER],
  [VoiceflowConstants.SlotType.TEMPERATURE, BuiltInLuisSlotType.TEMPERATURE],
  [VoiceflowConstants.SlotType.URL, BuiltInLuisSlotType.URL],
]);

export interface LuisFeature {
  modelName: string;
  isRequired: boolean;
}

export interface LuisIntentStructure {
  name: string;
  features?: string[];
}

export interface LuisEntityStructure {
  name: string;
  roles: string[];
}

export interface LuisBuiltInEntity {
  name: string;
  roles: string[];
}

export interface LuisUtteranceEntity {
  entity: string;
  startPos: number;
  endPos: number;
  children?: string[];
}

export interface LuisUtterances {
  text: string;
  intent: string;
  entities: LuisUtteranceEntity[];
}

export interface LuisSubList {
  canonicalForm: string;
  list: string[];
}

export interface LuisClosedList {
  name: string;
  roles: string[];
  subLists: LuisSubList[];
}

export interface LuisWorkspace {
  intents: LuisIntentStructure[];
  entities: LuisEntityStructure[];
  closedLists: LuisClosedList[];
  builtInEntities: LuisBuiltInEntity[];
  utterances: LuisUtterances[];
}
