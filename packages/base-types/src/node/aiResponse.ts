import { AIContextParams, AIKnowledgeParams, AIModelParams } from '../utils/ai';
import { NodeType } from './constants';
import { BaseNode, BaseStep, BuiltInNextPort, BuiltInNoMatchPort, NodeElseID, NodeNextID } from './utils';

export interface StepData extends AIModelParams, AIContextParams, AIKnowledgeParams {}

export interface Step<Data = StepData> extends BaseStep<Data, BuiltInNextPort & BuiltInNoMatchPort> {
  type: NodeType.AI_RESPONSE;
}

export interface Node extends BaseNode, StepData, NodeNextID, NodeElseID {
  type: NodeType.AI_RESPONSE;
}
