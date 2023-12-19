import { AIModelParams } from '../utils/ai';
import { NodeType } from './constants';
import {
  BaseNode,
  BaseNoMatchNodeData,
  BaseNoMatchStepData,
  BaseNoReplyNodeData,
  BaseNoReplyStepData,
  BaseStep,
  BaseStepPorts,
  BuiltInFailPort,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  NodeElseID,
  NodeIntentScope,
  NodeNextID,
  StepIntentScope,
} from './utils';

export interface StepData extends AIModelParams {}

export interface Step extends BaseStep<StepData, BaseStepPorts<BuiltInNextPort & BuiltInFailPort>> {
  type: NodeType.AI_CAPTURE;

  rules: string[];
  entities: string[];
  exitScenerios: string[];
}

export interface Node extends BaseNode, StepData, NodeNextID, NodeElseID {
  type: NodeType.AI_CAPTURE;
}

export interface BaseCaptureData extends BaseNoReplyStepData, StepIntentScope, BaseNoMatchStepData {}

export interface StepData extends AIModelParams {}

export interface StepBuiltInPorts extends BuiltInNextPort, BuiltInNoMatchNoReplyPorts {}

export interface StepPorts extends BaseStepPorts<StepBuiltInPorts, []> {}

export interface Node extends BaseNode, StepData, NodeNextID, NodeIntentScope, BaseNoReplyNodeData, BaseNoMatchNodeData {
  type: NodeType.AI_CAPTURE;
}
