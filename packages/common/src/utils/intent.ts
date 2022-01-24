import _sample from 'lodash/sample';

import { BuiltinSlot, LOWER_CASE_CUSTOM_SLOT_TYPE, SLOT_REGEXP, SPACE_REGEXP } from '@/constants';

import { getAllSamples } from './slot';

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

export interface JSONEntity {
  startPos: number;
  endPos: number;
  entity: string;
}
export interface JSONUtterance {
  text?: string;
  entities?: JSONEntity[];
}

// extension of the String.prototype.replace format
const continuousReplace = (text: string, regex: RegExp, replacer: (substring: string, ...args: any[]) => string): string => {
  // regex without any global flags (g or i)
  const localRegex = new RegExp(regex, '');
  let temp: string | undefined;
  let current = text;

  // keep replacing until there is nothing else to replace (local replaces one instance at a time, this is important to keep positional offset data)
  while (temp !== current) {
    temp = current;
    current = current.replace(localRegex, replacer);
  }
  return current;
};

export const utteranceEntityPermutations = (
  utterances: string[],
  entitiesByID: Record<string, { inputs: string[]; name: string }>,
  limit = 22
  // eslint-disable-next-line sonarjs/cognitive-complexity
): JSONUtterance[] => {
  const newUtterances: JSONUtterance[] = [];
  const entityRef: Record<string, { utterances: string[]; samples: string[] }> = {};

  const addNewUtterance = (utterance: string) => {
    if (!utterance?.trim()) return;

    const entities: JSONEntity[] = [];

    // Find all occurences of {entityName} in training utterances
    const text = continuousReplace(utterance, VF_ENTITY_REGEXP, (_match: string, entityName: string, entityID: string, offset: number) => {
      const entity = entitiesByID[entityID];
      if (!entity) return entityName;

      const sample = (entityRef[entityID]?.samples.shift() || _sample(getAllSamples(entity?.inputs)) || entityName).trim();
      if (!entityRef[entityID]?.samples?.length) delete entityRef[entityID];

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

    newUtterances.push({
      text,
      entities,
    });
  };

  // find all the entities referenced by this intent
  // first pass over all utterances guarantees every utterance used
  utterances.forEach((utterance) => {
    // find all the entities used in this utterance
    const entityMatches = [...utterance.matchAll(VF_ENTITY_REGEXP)];
    entityMatches.forEach((match) => {
      const entityID = match[2];
      // if this entity hasn't been visited before, initialize the ref and populate samples with all synonyms of the entity
      if (!entityRef[entityID]) {
        entityRef[entityID] = { samples: [], utterances: [] };
        const entity = entitiesByID[entityID];
        if (entity) {
          entityRef[entityID].samples.push(...getAllSamples(entity.inputs));
        }
      }

      entityRef[entityID].utterances.push(utterance);
    });

    addNewUtterance(utterance);
  });

  while (Object.keys(entityRef).length > 0 && newUtterances.length < limit) {
    const entityID = Object.keys(entityRef)[0];
    const utterancesUsingEntity = entityRef[entityID]?.utterances;

    if (utterancesUsingEntity?.length) {
      addNewUtterance(utterancesUsingEntity[newUtterances.length % utterancesUsingEntity.length]);
    } else {
      delete entityRef[entityID];
    }
  }

  return newUtterances;
};

const ALPHANUMERIC_REGEXP = /[\dA-Za-z{}]/;
// some NLP/NLU models do not allow entity classifications without a space seperator: 'I work at {startupName}flow' => 'I work at {startupName} flow'
export const injectUtteranceSpaces = (originalUtterance: string): string => {
  let spacesAdded = 0;

  let utterance = originalUtterance ? originalUtterance.trim() : '';
  const slots = [...utterance.matchAll(VF_ENTITY_REGEXP)];
  slots.forEach((slot) => {
    let index = slot.index! + spacesAdded;

    // Check if space should be added before slot
    if (index > 0 && utterance[index - 1].match(ALPHANUMERIC_REGEXP)) {
      utterance = `${utterance.slice(0, index)} ${utterance.slice(index)}`;
      ++spacesAdded;
      ++index;
    }

    // Check if space should be added after slot
    if (index + slot[0].length < utterance.length - 1 && utterance[index + slot[0].length].match(ALPHANUMERIC_REGEXP)) {
      utterance = `${utterance.slice(0, index + slot[0].length)} ${utterance.slice(index + slot[0].length)}`;
      ++spacesAdded;
    }
  });

  return utterance;
};

// VF.HELP -> help
export const cleanVFIntentName = (intentName: string) => (intentName.startsWith('VF.') ? intentName.slice(3).toLowerCase() : intentName);
