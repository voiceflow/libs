import { v1 } from 'ask-smapi-model';

import { DefaultNode, DefaultStep, NodeType, PermissionType } from './types';

export type StepData = {
  permissions: PermissionType[];
};

export type NodeData = {
  nextId?: string | null;
  permission_card: true | v1.skill.Manifest.PermissionName[];
};

export type Step = DefaultStep<NodeType.PERMISSION, StepData>;
export type Node = DefaultNode<NodeType.PERMISSION, NodeData>;
