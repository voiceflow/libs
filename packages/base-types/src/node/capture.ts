import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import { BaseNode, BaseNodeNoReply, BaseStep, BaseStepNoReply, NodeNextID } from './utils';

/** @deprecated */
export interface StepData {
  slot: Nullable<string>;
  noReply?: Nullable<BaseStepNoReply>;
  variable: Nullable<string>;
  slotInputs: string[];
}

/** @deprecated */
export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.CAPTURE;
}

/** @deprecated */
export interface Node extends BaseNode, NodeNextID {
  type: NodeType.CAPTURE;
  intent?: string;
  slots?: string[];
  noReply?: Nullable<BaseNodeNoReply>;
  variable: string;
}
