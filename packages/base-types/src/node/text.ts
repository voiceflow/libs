import { SlateTextValue } from '@base-types/text';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, DataID, NodeNextID, StepCanvasNodeVisibility, TraceType } from './utils';

export interface TextData extends DataID {
  content: SlateTextValue;
  messageDelayMilliseconds?: number;
}

export interface StepData extends StepCanvasNodeVisibility {
  texts: TextData[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.TEXT;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.TEXT;
  texts: TextData[];
}

export interface TextTracePayload {
  message: string;
  slate: TextData;
}

export interface TraceFrame extends BaseTraceFrame<TextTracePayload> {
  type: TraceType.TEXT;
}
