import _uniqBy from 'lodash/uniqBy.js';

import { SLOT_REGEXP } from '../constants';

export const addPrebuiltEntities = <A extends { key: string; inputs: string[] }>(
  entities: A[],
  prebuiltEntities: Record<string, string[]>
): A[] =>
  entities.map((entity) => {
    if (prebuiltEntities[entity.key]) {
      return {
        ...entity,
        inputs: [...entity.inputs, ...prebuiltEntities[entity.key]],
      };
    }
    return entity;
  });

export const getUniqueSamples = (input: string) => _uniqBy(input.split(','), (sample) => sample.toLowerCase());

// spread all synonyms into string array ['car, automobile', 'plane, jet'] => ['car', 'automobile', 'plane', 'jet']
export const getAllSamples = (inputs: string[] = []) =>
  inputs.flatMap((input) => input.split(',')).filter((sample) => !!sample.trim());

/**
 * Return a tuple of synonyms, the first value being the first synonym, the next being the remaining synonyms
 */
export const getValueWithSynonyms = (input: string): [string, string[]] => {
  const [value, ...synonyms] = input.split(',').map((str) => str.trim());
  return [value, synonyms];
};

/**
 * Map through all slot annotations in the given string input.
 * For each annotation, the callbackFn will be called with the slot's key and name, returning a key and name.
 * @param input String with slot annotations.
 * @param callbackFn Map function called with the key and name of the slot.
 * @returns Input with mapped slot annotations
 * @example const result = mapSlotAnnotations("Hello {{[slot].id}}", ({key, name}) => ({key: key + '2', slot: slot + '2'});
 * result === "Hello {{[slot2].id2}}"
 */
export const mapSlotAnnotations = (
  input: string,
  callbackFn: (slot: { key: string; name: string }) => { key: string; name: string }
) => {
  return input.replace(SLOT_REGEXP, (_, slotName, slotKey) => {
    const { key, name } = callbackFn({ key: slotKey, name: slotName });
    return `{{[${name}].${key}}}`;
  });
};
