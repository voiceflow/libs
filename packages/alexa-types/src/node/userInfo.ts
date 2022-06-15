import { BaseNode, Nullable } from '@voiceflow/base-types';

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

export interface StepPorts extends BaseNode.Utils.SuccessFailStepPorts<[]> {}

export interface Step extends BaseNode.Utils.BaseStep<StepData, StepPorts> {
  type: NodeType.USER_INFO;
}

export interface BaseTypedNode extends BaseNode.Utils.BaseNode {
  type: NodeType.USER_INFO;
}

export interface NextNode extends BaseTypedNode, BaseNode.Utils.NodeNextID {}

export interface UseInfoNode extends BaseTypedNode, BaseNode.Utils.NodeSuccessFailID {
  permissions: Permission[];
}

export type Node = NextNode | UseInfoNode;
