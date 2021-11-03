import { Nullable } from '@/utils';

import { NodeType } from './constants';
import { BaseNode, BaseNodeNoReply, BaseStep, BaseStepNoReply, NodeNextID } from './utils';

export interface StepData {
  slot: Nullable<string>;
  noReply?: Nullable<BaseStepNoReply>;
  variable: Nullable<string>;
  slotInputs: string[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.CAPTURE;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.CAPTURE;
  noReply?: Nullable<BaseNodeNoReply>;
  variable: string;
}
