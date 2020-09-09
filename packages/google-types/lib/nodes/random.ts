import { DefaultNode, DefaultStep, NodeType } from './types';

export enum RandomType {
  DEFAULT = 1,
  DO_DUPLICATES = 2,
}

export type StepData = {
  paths: number;
  noDuplicates: boolean;
};

export type NodeData = {
  random: RandomType;
  nextIds: string[];
};

export type Step = DefaultStep<NodeType.RANDOM, StepData>;
export type Node = DefaultNode<NodeType.RANDOM, NodeData>;
