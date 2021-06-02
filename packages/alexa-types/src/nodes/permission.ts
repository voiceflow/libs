/* eslint-disable camelcase */

import { NodeID } from '@voiceflow/general-types';
import { v1 } from 'ask-smapi-model';

import { BaseNode, BaseStep, NodeType, PermissionType } from './types';

export interface StepData {
  permissions: PermissionType[];
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.PERMISSION;
}

export interface Node extends BaseNode {
  type: NodeType.PERMISSION;
  nextId?: NodeID;
  permission_card: true | v1.skill.Manifest.PermissionName[];
}
