import { BaseStepPorts } from '@base-types/models';

import { AIModelParams } from '../utils/ai';
import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoMatchStepData,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  NodeIntentScope,
  NodeNextID,
  StepIntentScope,
} from './utils';

export interface StepData extends AIModelParams, BaseNoReplyStepData, StepIntentScope, BaseNoMatchStepData {
  rules: string[];
  entities: string[];
  exitScenerios: string[];
}

export interface Step extends BaseStep<StepData, BaseStepPorts<BuiltInNextPort & BuiltInNoMatchNoReplyPorts>> {
  type: NodeType.AI_CAPTURE;
}

export interface Node extends BaseNode, StepData, NodeNextID, NodeIntentScope, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.AI_CAPTURE;
}
