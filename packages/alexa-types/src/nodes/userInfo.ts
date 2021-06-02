/* eslint-disable camelcase */

import { Nullable } from '@voiceflow/api-sdk';
import { NodeID } from '@voiceflow/general-types';

import { BaseNode, BaseStep, NodeType, PermissionType } from './types';

export interface UserInfo {
  type: Nullable<PermissionType>;
  mapTo: Nullable<string>;
  product: Nullable<string>;
}

export interface StepData {
  infos: UserInfo[];
}

export interface Permission {
  map_to: Nullable<{ value: string }>;
  product: Nullable<{ value: string }>;
  selected: Nullable<{ value: string }>;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.USER_INFO;
}

export interface BaseTypedNode extends BaseNode {
  type: NodeType.USER_INFO;
}

export interface NextNode extends BaseNode {
  nextId?: NodeID;
}

export interface UseInfoNode extends BaseNode {
  fail_id?: NodeID;
  success_id?: NodeID;
  permissions: Permission[];
}

export type Node = NextNode | UseInfoNode;
