import { PortType } from '@base-types/models';
import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import { BaseNode, BaseNoReplyNodeData, BaseNoReplyStepData, BasePort, BasePortList, BaseStep, BaseStepPorts, NodeNextID } from './utils';

/** @deprecated */
export interface StepData extends BaseNoReplyStepData {
  slot: Nullable<string>;
  variable: Nullable<string>;
  slotInputs: string[];
}

/** @deprecated */
export interface StepPorts extends BaseStepPorts<{ [PortType.NEXT]: BasePort; [PortType.NO_REPLY]?: BasePort }, []> {}

/** @deprecated */
export interface Step<Data = StepData> extends BaseStep<Data, BasePortList, StepPorts> {
  type: NodeType.CAPTURE;
}

/** @deprecated */
export interface Node extends BaseNode, NodeNextID, BaseNoReplyNodeData {
  type: NodeType.CAPTURE;
  intent?: string;
  slots?: string[];
  variable: string;
}
