import { DefaultNode, DefaultStep, NodeType } from './types';

export enum DisplayType {
  SPLASH = 'SPLASH',
  JSON = 'JSON',
}

export type StepData = {
  type: DisplayType;
  imageURL?: string;
  title?: string;
  jsonFileName?: string;
  datasource?: string;
  document?: string;
  aplCommands?: string;
};

export type NodeData = {
  datasource: string;
  document: string;
  aplCommands?: string;
  nextId: string;
};

export type Step = DefaultStep<NodeType.DISPLAY, StepData>;
export type Node = DefaultNode<NodeType.DISPLAY, NodeData>;
