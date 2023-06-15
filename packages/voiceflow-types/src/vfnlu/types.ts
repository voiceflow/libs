import { SlotType } from '../constants';

/**
 * @deprecated
 * Consider replacing these slot types, which were originally defined for LUIS NLU, into a new set of
 * default slot types for VFNLU. The VFNLU should not be constrained by the limitations of LUIS. We can
 * add new slot types that were never supported by LUIS or remove LUIS defaults that we don't want to
 * support.
 *
 * Speak with the NLUM/ML team for how they want to approach this.
 */
export enum BuiltInVFNLUSlotType {
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

/**
 * @deprecated
 * This mapping is a temporary data structure that is to map our general slot types into a format
 * compatible with LUIS. This mapping is unnecessary with the introducion of VFNLU and we should
 * eventually refactor the NLU so that `SlotType` can be used directly. In the meantime, this mapping
 * is left in for backwards compatibility.
 */
export const GENERAL_SLOT_TYPE_TO_VFNLU: ReadonlyMap<SlotType, BuiltInVFNLUSlotType> = new Map([
  [SlotType.AGE, BuiltInVFNLUSlotType.AGE],
  [SlotType.CURRENCY, BuiltInVFNLUSlotType.CURRENCY],
  [SlotType.DATETIME, BuiltInVFNLUSlotType.DATETIME_V2],
  [SlotType.DIMENSION, BuiltInVFNLUSlotType.DIMENSION],
  [SlotType.EMAIL, BuiltInVFNLUSlotType.EMAIL],
  [SlotType.GEOGRAPHY, BuiltInVFNLUSlotType.GEOGRAPHY_V2],
  [SlotType.KEY_PHRASE, BuiltInVFNLUSlotType.KEY_PHRASE],
  [SlotType.NAME, BuiltInVFNLUSlotType.PERSON_NAME],
  [SlotType.NUMBER, BuiltInVFNLUSlotType.NUMBER],
  [SlotType.ORDINAL, BuiltInVFNLUSlotType.ORDINAL],
  // ORDINAL_V2 doesn't exist in VoiceflowConstants.SlotType currently, might get modified in the future once ORDINAL_V2 gets better language support on LUIS
  // eslint-disable-next-line no-secrets/no-secrets
  // [VoiceflowConstants.SlotType.ORDINAL_V2, BuiltInLuisSlotType.ORDINAL_V2],
  [SlotType.PERCENTAGE, BuiltInVFNLUSlotType.PERCENTAGE],
  [SlotType.PHONENUMBER, BuiltInVFNLUSlotType.PHONENUMBER],
  [SlotType.TEMPERATURE, BuiltInVFNLUSlotType.TEMPERATURE],
  [SlotType.URL, BuiltInVFNLUSlotType.URL],
]);
