import { NodeType } from './constants';
import { BaseNoMatchStepData, BaseNoReplyStepData, BaseStep, BaseStepNoMatch } from './utils';

export interface StepData extends BaseNoReplyStepData, BaseNoMatchStepData {
  /**
   * @deprecated use noMatch instead
   */
  noMatches?: BaseStepNoMatch;
}

export interface Step<Data = StepData> extends BaseStep<Data, []> {
  type: NodeType.PROMPT;
}
