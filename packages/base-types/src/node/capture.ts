import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  BaseStepPorts,
  BuiltInNextPort,
  BuiltInNoReplyPort,
  NodeNextID,
} from './utils';

/** @deprecated */
export interface StepData extends BaseNoReplyStepData {
  slot: Nullable<string>;
  variable: Nullable<string>;
  slotInputs: string[];
}

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoReplyPort {}

/** @deprecated */
export interface StepPorts extends BaseStepPorts<StepBuiltInPorts, []> {}

/** @deprecated */
export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CAPTURE;
}

/** @deprecated */
export interface Node extends BaseNode, NodeNextID, BaseNoReplyNodeData {
  type: NodeType.CAPTURE;
  intent?: string;
  slots?: string[];
  variable: string;
}
