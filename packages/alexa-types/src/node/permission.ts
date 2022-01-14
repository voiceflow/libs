import { Node } from '@voiceflow/base-types';
import { v1 } from 'ask-smapi-model';

import { NodeType, PermissionType } from './constants';

export interface StepData {
  permissions: PermissionType[];
}

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.PERMISSION;
}

export interface Node extends Node.Utils.BaseNode, Node.Utils.NodeNextID {
  type: NodeType.PERMISSION;
  permission_card: true | v1.skill.Manifest.PermissionName[];
}
