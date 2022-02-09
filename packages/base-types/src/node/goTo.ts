import { IntentRequest } from '@base-types/request';
import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import { BaseNode } from './utils';

export interface Node extends BaseNode {
  type: NodeType.GOTO;
  request: IntentRequest;
  diagramID?: Nullable<string>;
}
