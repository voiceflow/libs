import { Button, Chip, NoMatches, Prompt } from '@/types';

import { DefaultStep, NodeType } from './types';

export type StepData<V> = {
  reprompt: Prompt<V> | null;
  noMatches: NoMatches<V>;
  buttons?: Button[] | null;
  /**
   * @deprecated Use buttons
   */
  chips: Chip[] | null;
};

export type Step<V> = DefaultStep<NodeType.PROMPT, StepData<V>, []>;
