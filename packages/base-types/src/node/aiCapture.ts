import { BaseStepPorts } from '@base-types/models';

import { AIModelParams } from '../utils/ai';
import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoReplyNodeData,
  BaseStep,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  NodeIntentScope,
  NodeNextID,
} from './utils';

export interface StepData extends AIModelParams {
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
