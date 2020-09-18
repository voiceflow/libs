import { DefaultNode, DefaultStep, NodeType, PermissionType } from './types';

export type UserInfo = {
  type: PermissionType | null;
  mapTo: string | null;
  product: string | null;
};

export type StepData = {
  infos: UserInfo[];
};

export type Permission = {
  map_to: { value: string } | null;
  product: { value: string } | null;
  selected: { value: string } | null;
};

export type NodeData =
  | { nextId?: string | null }
  | {
      fail_id?: string | null;
      success_id?: string | null;
      permissions: Permission[];
    };

export type Step = DefaultStep<NodeType.USER_INFO, StepData>;
export type Node = DefaultNode<NodeType.USER_INFO, NodeData>;
