import { NoMatches, Prompt } from '@/types';

import { DefaultStep, NodeType } from './types';

export type StepData<V> = {
  reprompt: Prompt<V> | null;
  noMatches: NoMatches<V>;
};

export type Step<V> = DefaultStep<NodeType.PROMPT, StepData<V>, []>;
