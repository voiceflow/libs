import type { NodeType } from './constants';
import type {
  BaseNoMatchStepData,
  BaseNoReplyStepData,
  BaseStep,
  BaseStepNoMatch,
  NoMatchNoReplyStepPorts,
} from './utils';

export interface StepData extends BaseNoReplyStepData, BaseNoMatchStepData {
  /**
   * @deprecated use noMatch instead
   */
  noMatches?: BaseStepNoMatch;
}

export interface StepPorts extends NoMatchNoReplyStepPorts<[]> {}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.PROMPT;
}
