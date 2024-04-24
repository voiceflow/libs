import type { BaseNode, BaseRequest } from '@voiceflow/base-types';

import type { ButtonNode } from '../buttons';

export interface NodeInteraction extends BaseNode.Utils.SlotMappings {
  intent: string;
  nextIdIndex?: number;
}

export interface SharedNode extends Omit<BaseRequest.NodeButton, 'buttons'>, BaseNode.Utils.NodeNextIDs {
  buttons?: ButtonNode[];
  interactions: NodeInteraction[];
}
