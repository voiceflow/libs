/* eslint-disable camelcase */

import { NodeID } from '@voiceflow/general-types';

import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = Record<string, unknown>;

export type NodeData = {
  nextId?: NodeID;
  link_account: true;
};

export type Step = DefaultStep<NodeType.ACCOUNT_LINKING, StepData>;
export type Node = DefaultNode<NodeType.ACCOUNT_LINKING, NodeData>;
