import { SlateTextValue } from '@/text';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, NodeNextID, StepCanvasNodeVisibility, TraceType } from './utils';

export interface TextData {
  id: string;
  content: SlateTextValue;
}

export interface StepData extends StepCanvasNodeVisibility {
  texts: TextData[];
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.TEXT;
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.TEXT;
  texts: TextData[];
}

export interface TextTracePayload {
  text: string;
  slate: TextData;
}

export interface TraceFrame extends BaseTraceFrame<TextTracePayload> {
  type: TraceType.TEXT;
}
