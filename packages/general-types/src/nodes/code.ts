/* eslint-disable camelcase */

import { DefaultNode, DefaultStep, NodeID, NodeType } from './types';

export type StepData = {
  code: string;
};

export type NodeData = {
  code: string;
  fail_id?: NodeID;
  success_id?: NodeID;
};

export type Step = DefaultStep<NodeType.CODE, StepData>;
export type Node = DefaultNode<NodeType.CODE, NodeData>;
