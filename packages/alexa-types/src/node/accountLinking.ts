import type { BaseNode } from '@voiceflow/base-types';
import type { Struct } from '@voiceflow/common';

import type { NodeType } from './constants';

export type StepData = Struct;

export interface Step extends BaseNode.Utils.BaseStep<StepData> {
  type: NodeType.ACCOUNT_LINKING;
}

export interface Node extends BaseNode.Utils.BaseNode, BaseNode.Utils.NodeNextID {
  type: NodeType.ACCOUNT_LINKING;
  link_account: true;
}
