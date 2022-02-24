import { BaseModels } from '@voiceflow/base-types';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';
import _uniqBy from 'lodash/uniqBy';

export const addPrebuiltEntities = <A extends { key: string; inputs: string[] }>(entities: A[], prebuiltEntities: Record<string, string[]>): A[] =>
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
export const getAllSamples = (inputs: string[] = []) => inputs.flatMap((input) => input.split(',')).filter((sample) => !!sample.trim());

export const addPrebuiltSamples = (slot: BaseModels.Slot, language: string = VoiceflowConstants.Language.EN) => {
  const SLOT_SAMPLES = VoiceflowConstants.SlotTypes[language] || VoiceflowConstants.SlotTypes[VoiceflowConstants.Language.EN];

  const slotSample = SLOT_SAMPLES.find((s) => s.name === slot.type.value);
  return slotSample
    ? {
        ...slot,
        inputs: slot.inputs.concat(slotSample.values),
      }
    : slot;
};
