import { NodeType } from './constants';
import { BaseStep, BaseStepNoMatch } from './utils';

export interface StepData {
  noMatches: BaseStepNoMatch;
}

export interface Step<Data = StepData> extends BaseStep<Data, []> {
  type: NodeType.PROMPT;
}
