import { ActionRequestButton, GeneralRequestButton } from '@base-types/request';
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
  BaseTraceFrame,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  DataID,
  NodeNextID,
  TraceType,
} from './utils';

export interface CardV2Button extends DataID {
  name: string;
  intent?: Nullable<string>;
}

export interface CardV2Data<Button> {
  title: string;
  buttons: Button[];
  imageUrl: string | null;
}

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoMatchNoReplyPorts {}

export interface StepPorts extends BaseStepPorts<StepBuiltInPorts, []> {}

export interface StepData<Button = CardV2Button> extends BaseNoMatchStepData, BaseNoReplyStepData, CardV2Data<Button> {}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.CARD_V2;
}

type CardDataWithGeneralButton = CardV2Data<GeneralRequestButton | ActionRequestButton>;

export interface Node extends BaseNode, NodeNextID, BaseNoReplyNodeData, BaseNoMatchNodeData, CardDataWithGeneralButton {
  type: NodeType.CARD_V2;
  isBlocking: boolean;
  platform?: string;
}

export interface TraceCardV2Description {
  slate: SlateTextValue;
  text: string;
}
export interface TraceCardV2 extends CardDataWithGeneralButton {
  description: TraceCardV2Description;
}

export interface TraceFramePayload extends TraceCardV2 {}
export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.CARD_V2;
}
