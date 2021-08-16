/* eslint-disable camelcase */

import { Nullable } from '@voiceflow/api-sdk';
import { Node } from '@voiceflow/base-types';

import { NodeType, PermissionType } from './constants';

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

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.USER_INFO;
}

export interface BaseTypedNode extends Node.Utils.BaseNode {
  type: NodeType.USER_INFO;
}

export interface NextNode extends Node.Utils.BaseNode, Node.Utils.NodeNextID {}

export interface UseInfoNode extends Node.Utils.BaseNode, Node.Utils.NodeSuccessFailID {
  permissions: Permission[];
}

export type Node = NextNode | UseInfoNode;
