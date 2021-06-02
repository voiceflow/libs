import { NoMatches } from '@/types';

import { BaseStep, NodeType, StepDataWithButtons, StepDataWithReprompt } from './types';

export interface StepData<V> extends StepDataWithReprompt<V>, StepDataWithButtons {
  noMatches: NoMatches<V>;
}

export interface Step<V> extends BaseStep<StepData<V>, []> {
  type: NodeType.PROMPT;
}
