import { NoMatches, Prompt } from '@/types';

import { DefaultStep, NodeType } from './types';

export type StepData = {
  reprompt: Prompt | null;
  noMatches: NoMatches;
};

export type Step = DefaultStep<NodeType.PROMPT, StepData, []>;
