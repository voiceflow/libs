import type { SlateTextValue } from '@base-types/text';

import type { NodeType } from './constants';
import type { BaseNode, BaseStep, DataID, NodeNextID, StepCanvasNodeVisibility } from './utils';

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
