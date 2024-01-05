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

export interface Data extends AIModelParams {
  rules: string[];
  entities: string[];
  exitScenerios: string[];
}

export interface StepData extends Data, BaseNoReplyStepData, StepIntentScope, BaseNoMatchStepData {}

export interface Step extends BaseStep<StepData, BaseStepPorts<BuiltInNextPort & BuiltInNoMatchNoReplyPorts>> {
  type: NodeType.AI_CAPTURE;
}

export interface Node extends BaseNode, Data, NodeNextID, NodeIntentScope, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.AI_CAPTURE;
}
