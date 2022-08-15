import { IntentRequest } from '@base-types/request';
import { EmptyObject, Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseNode, BaseNoMatchNodeData, BaseStep } from './utils';

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
