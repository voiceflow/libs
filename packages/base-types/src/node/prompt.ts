import { Nullable } from '@/types';

import { NodeType } from './constants';
import { BaseStep, BaseStepNoMatch, BaseStepNoReply } from './utils';

export interface StepData {
  noReply?: Nullable<BaseStepNoReply>;
  noMatches: BaseStepNoMatch;
}

export interface Step<Data = StepData> extends BaseStep<Data, []> {
  type: NodeType.PROMPT;
}
