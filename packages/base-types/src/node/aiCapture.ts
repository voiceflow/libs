import type { BaseStepPorts } from '@base-types/models';

import type { AIModelParams } from '../utils/ai';
import type { NodeType } from './constants';
import type {
  BaseNode,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  BuiltInFailPort,
  BuiltInNextPort,
  BuiltInNoReplyPort,
  NodeElseID,
  NodeIntentScope,
  NodeNextID,
  StepIntentScope,
} from './utils';

export interface Data extends AIModelParams {
  rules: string[];
  entities: string[];
  exitPath: boolean;
  exitScenerios: string[];
}

export interface StepData extends Data, BaseNoReplyStepData, StepIntentScope {}

export interface Step
  extends BaseStep<StepData, BaseStepPorts<BuiltInNextPort & BuiltInFailPort & BuiltInNoReplyPort>> {
  type: NodeType.AI_CAPTURE;
}

export interface Node extends BaseNode, Data, NodeNextID, NodeElseID, NodeIntentScope, BaseNoReplyNodeData {
  type: NodeType.AI_CAPTURE;
}
