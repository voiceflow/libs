import { StepButtons } from '@/button';

import { NodeType } from './constants';
import { BaseStep, BaseStepNoMatch } from './utils';

export interface StepData extends StepButtons {
  noMatches: BaseStepNoMatch;
}

export interface Step<D extends StepData = StepData> extends BaseStep<D, []> {
  type: NodeType.PROMPT;
}
