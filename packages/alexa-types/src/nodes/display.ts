import { APLStepData, APLType } from '@voiceflow/general-types/build/nodes/visual';

import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = Omit<APLStepData, 'visualType' | 'aplType'> & {
  type: APLType;
};

export type NodeData = {
  datasource: string;
  document: string;
  aplCommands?: string;
  nextId: string;
};

export type Step = DefaultStep<NodeType.DISPLAY, StepData>;
export type Node = DefaultNode<NodeType.DISPLAY, NodeData>;
