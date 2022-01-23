import _sample from 'lodash/sample';

import { BuiltinSlot, LOWER_CASE_CUSTOM_SLOT_TYPE, SLOT_REGEXP, SPACE_REGEXP } from '@/constants';

export const formatIntentName = (name: string): string => {
  if (!name) {
    return name;
  }

  let formattedName = '';
  // replace white spaces with underscores
  formattedName = name.replace(SPACE_REGEXP, '_');
  // replace numbers with equivalent capital letter. Ex: 0 = A, 1 = B
  formattedName = formattedName.replace(/\d/g, (digit) => String.fromCharCode(parseInt(digit, 10) + 65));

  return formattedName;
};

export const getUtterancesWithSlotNames = ({
  slots = [],
  utterances = [],
}: {
  slots?: { key: string; name: string }[];
  utterances?: { text: string }[];
}): string[] =>
  utterances
    .filter((utterance) => !!utterance.text?.trim())
    .map(({ text }) =>
      text.replace(SLOT_REGEXP, (substring, _name: string, key: string) => {
        const slot = slots.find((_slot) => _slot.key === key);

        return slot?.name ? `{${slot.name}}` : substring;
      })
    );

export const getSlotType = (slots: BuiltinSlot<string, string>[], slot: { name: string; type: { value?: string } }): string => {
  let type = slot.name;
  const lowerCaseType = slot.type.value?.toLowerCase() ?? '';

  if (!!slot.type.value && lowerCaseType !== LOWER_CASE_CUSTOM_SLOT_TYPE) {
    const builtinSlot = slots.find((_slot) => _slot.label.toLowerCase() === lowerCaseType);

    if (!builtinSlot) {
      type = slot.type.value; // Platform specific slot
    } else {
      ({ type } = builtinSlot);
    }
  }

  return type;
};

export const VF_ENTITY_REGEXP = /{{\[(\w{1,32})]\.(\w{1,32})}}/gi;
const VF_ENTITY_REGEXP_LOCAL = new RegExp(VF_ENTITY_REGEXP, '');

export interface JSONEntity {
  startPos: number;
  endPos: number;
  entity: string;
}
export interface JSONUtterance {
  text?: string;
  entities?: JSONEntity[];
}

export const utteranceEntityPermutations = (
  utterances: string[],
  entitiesByID: Record<string, { inputs: string[]; name: string }>,
  limit = 22
  // eslint-disable-next-line sonarjs/cognitive-complexity
): JSONUtterance[] => {
  const newUtterances: JSONUtterance[] = [];
  const unusedEntities: Record<string, { utterances: string[]; samples: string[] }> = {};

  const addNewUtterance = (utterance: string) => {
    if (!utterance?.trim()) return;

    const entities: JSONEntity[] = [];

    // Find all occurences of {entityName} in training utterances
    let temp: string | undefined;
    let current = utterance;

    // keep replacing until there is nothing to replace (local replaces one instance at a time, this is important to keep positional data)
    while (temp !== current) {
      temp = utterance;
      current = current.replace(VF_ENTITY_REGEXP_LOCAL, (_match: string, entityName: string, entityID: string, offset: number) => {
        const entity = entitiesByID[entityID];
        if (!entity) return entityName;

        const sample = (unusedEntities[entityID]?.samples.shift() || _sample(entity?.inputs?.join(',')?.split(',')) || entityName).trim();
        if (!unusedEntities[entityID]?.samples?.length) delete unusedEntities[entityID];

        // This module should additionally create one full training utterance with positional entity (startPos, endPos, entityName).
        const startPos = offset || 0;
        const endPos = startPos + sample.length - 1;
        entities.push({
          startPos,
          endPos,
          entity: entity.name,
        });

        // Replace the entities with the sample value
        return sample;
      });
    }

    newUtterances.push({
      text: utterance,
      entities,
    });
  };

  // try to ensure every single entity utterance is implemented within an intent
  let i = 0;

  // find all the entities referenced by this intent
  // first pass over all utterances guarantees every utterance used
  utterances.forEach((utterance) => {
    // find all the entities used in each utterance
    const entityMatches = [...utterance.matchAll(VF_ENTITY_REGEXP)];
    entityMatches.forEach((match) => {
      const entityID = match[2];
      // if this entity hasn't been visited before, create samples for it
      if (!unusedEntities[entityID]) {
        unusedEntities[entityID] = { samples: [], utterances: [] };
        const entity = entitiesByID[entityID];
        if (entity) {
          entity.inputs.forEach((input) => input.split(',').forEach((sample) => unusedEntities[entityID].samples.push(sample)));
        }
      }

      unusedEntities[entityID].utterances.push(utterance);
    });

    addNewUtterance(utterance);
    i++;
  });

  while (Object.keys(unusedEntities).length > 0 && i < limit) {
    const entityID = Object.keys(unusedEntities)[0];
    const _utterances = unusedEntities[entityID]?.utterances;
    if (!_utterances) delete unusedEntities[entityID];

    addNewUtterance(_utterances[i % _utterances.length]);
    i++;
  }

  return newUtterances;
};
