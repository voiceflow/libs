import { Chip, NoMatches, Prompt } from '@/types';

import { DefaultStep, NodeType } from './types';

export type StepData<V> = {
  reprompt: Prompt<V> | null;
  noMatches: NoMatches<V>;
  chips: Chip[] | null;
};

export type Step<V> = DefaultStep<NodeType.PROMPT, StepData<V>, []>;
