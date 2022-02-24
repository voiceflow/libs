import { IntentRequest } from '@base-types/request';

import { NodeType } from './constants';
import { BaseNode, BaseNoMatchNodeData } from './utils';

export interface Node extends BaseNode, BaseNoMatchNodeData {
  type: NodeType.GOTO;
  request: IntentRequest;
}
