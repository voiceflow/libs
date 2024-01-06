import { BaseStepPorts } from '@base-types/models';

import { AIModelParams } from '../utils/ai';
import { NodeType } from './constants';
import {
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

export interface Step extends BaseStep<StepData, BaseStepPorts<BuiltInNextPort & BuiltInFailPort & BuiltInNoReplyPort>> {
  type: NodeType.AI_CAPTURE;
}

export interface Node extends BaseNode, Data, NodeNextID, NodeElseID, NodeIntentScope, BaseNoReplyNodeData {
  type: NodeType.AI_CAPTURE;
}
