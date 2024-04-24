import type { IntentRequest } from '@base-types/request';
import type { EmptyObject, Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type { BaseNode, BaseNoMatchNodeData, BaseStep } from './utils';

export interface StepData {
  intent: Nullable<string>;
  diagramID: Nullable<string>;
}

export interface Step<Data = StepData> extends BaseStep<Data, EmptyObject, []> {
  type: NodeType.GOTO;
}

export interface Node extends BaseNode, BaseNoMatchNodeData {
  type: NodeType.GOTO;
  request: IntentRequest;
  platform?: string;
}
