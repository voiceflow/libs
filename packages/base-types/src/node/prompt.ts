import { NodeType } from './constants';
import { BaseStep, BaseStepNoMatches } from './utils';

export interface StepData {
  noMatches: BaseStepNoMatches;
}

export interface Step<Data = StepData> extends BaseStep<Data, []> {
  type: NodeType.PROMPT;
}
