/* eslint-disable camelcase */

import { Node, UnknownRecord } from '@voiceflow/base-types';

import { NodeType } from './constants';

export type StepData = UnknownRecord;

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.ACCOUNT_LINKING;
}

export interface Node extends Node.Utils.BaseNode, Node.Utils.NodeNextID {
  type: NodeType.ACCOUNT_LINKING;
  link_account: true;
}
