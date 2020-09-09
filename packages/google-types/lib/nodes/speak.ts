import { Prompt } from '../types';
import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  randomize: boolean;
  dialogs: Prompt[];
};

export type NodeData = {
  prompt?: string;
  nextId?: string | null;
} & ({ speak: string } | { random_speak: string[] });

export type Step = DefaultStep<NodeType.SPEAK, StepData>;
export type Node = DefaultNode<NodeType.SPEAK, NodeData>;
