import { GeneralRequestButton } from '@base-types/request';
import { SlateTextValue } from '@base-types/text';
import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoMatchStepData,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  BaseStepPorts,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  DataID,
  NodeNextID,
} from './utils';

export interface CardV2Button extends DataID {
  name: string;
  intent?: Nullable<string>;
}

export interface CardV2Card<B = CardV2Button> extends DataID {
  imageUrl: string | null;
  title: string;
  description: SlateTextValue;
  buttons: B[];
}

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoMatchNoReplyPorts {}

export interface StepPorts extends BaseStepPorts<StepBuiltInPorts, []> {}

export interface StepData extends BaseNoMatchStepData, BaseNoReplyStepData {
  card: CardV2Card;
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CARD_V2;
}

export type NodeCardV2 = CardV2Card<GeneralRequestButton>;
export interface Node extends BaseNode, NodeNextID, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.CARD_V2;
  card: NodeCardV2;
  isBlocking: boolean;
}
