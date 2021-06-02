/* eslint-disable camelcase */

import { UnknownRecord } from '@voiceflow/api-sdk';
import { NodeID } from '@voiceflow/general-types';

import { BaseNode, BaseStep, NodeType } from './types';

export type StepData = UnknownRecord;

export interface Step extends BaseStep<StepData> {
  type: NodeType.ACCOUNT_LINKING;
}

export interface Node extends BaseNode {
  type: NodeType.ACCOUNT_LINKING;
  nextId?: NodeID;
  link_account: true;
}
