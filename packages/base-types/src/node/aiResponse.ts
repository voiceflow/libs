import { AIContextParams, AIKnowledgeParams, AIModelParams } from '../utils/ai';
import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseStepPorts, BuiltInFailPort, BuiltInNextPort, NodeElseID, NodeNextID } from './utils';

export interface StepData extends AIModelParams, AIContextParams, AIKnowledgeParams {
  notFoundPath?: boolean;

  // the existance of this property is also a flag if the step is a legacy version or not
  overrideParams?: boolean;
}

export interface Step<Data = StepData> extends BaseStep<Data, BaseStepPorts<BuiltInNextPort & BuiltInFailPort>> {
  type: NodeType.AI_RESPONSE;
}

export interface Node extends BaseNode, StepData, NodeNextID, NodeElseID {
  type: NodeType.AI_RESPONSE;
}
