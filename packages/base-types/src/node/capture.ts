import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import { BaseNode, BaseNoReplyNodeData, BaseNoReplyStepData, BaseStep, NodeNextID } from './utils';

/** @deprecated */
export interface StepData extends BaseNoReplyStepData {
  slot: Nullable<string>;
  variable: Nullable<string>;
  slotInputs: string[];
}

/** @deprecated */
export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.CAPTURE;
}

/** @deprecated */
export interface Node extends BaseNode, NodeNextID, BaseNoReplyNodeData {
  type: NodeType.CAPTURE;
  intent?: string;
  slots?: string[];
  variable: string;
}
