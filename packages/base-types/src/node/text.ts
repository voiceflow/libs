import { SlateTextValue } from '@base-types/text';

import { NodeType } from './constants';
import { BaseNode, BaseResponseTrace, BaseStep, BaseTraceFrame, DataID, NodeNextID, StepCanvasNodeVisibility, TraceType } from './utils';

export interface TextData extends DataID {
  content: SlateTextValue;
  /** @deprecated use TextTracePayload.delay instead */
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
  platform?: string;
}

export interface TextTracePayload extends BaseResponseTrace {
  slate: TextData;
  delay?: number;
}

export interface TraceFrame extends BaseTraceFrame<TextTracePayload> {
  type: TraceType.TEXT;
}
