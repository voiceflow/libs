/* eslint-disable camelcase */

import { BaseNode, BaseStep, NodeID, NodeType } from './types';

export interface StepData {
  code: string;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.CODE;
}

export interface Node extends BaseNode {
  type: NodeType.CODE;
  code: string;
  fail_id?: NodeID;
  success_id?: NodeID;
}
