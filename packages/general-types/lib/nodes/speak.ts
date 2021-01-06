import { Prompt } from '@/types';

import { DefaultNode, DefaultStep, NodeID, NodeType, TraceFrame as DefaultTraceFrame, TraceType } from './types';

export type StepData<V> = {
  dialogs: Prompt<V>[];
  randomize: boolean;
};

export type NodeData = {
  prompt?: string;
  nextId?: NodeID;
} & ({ speak: string } | { random_speak: string[] });

export type Step<V> = DefaultStep<NodeType.SPEAK, StepData<V>>;
export type Node = DefaultNode<NodeType.SPEAK, NodeData>;
export type TraceFrame = DefaultTraceFrame<TraceType.SPEAK, { message: string; type?: string; voice?: string; src?: string | null }>;
