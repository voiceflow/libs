import { BaseNode, BaseRequest } from '@voiceflow/base-types';

import { ButtonNode } from '../buttons';

export interface NodeGoTo {
  intentName: string;
}

export interface NodeInteraction extends BaseNode.Utils.SlotMappings {
  goTo?: NodeGoTo;
  intent: string;
  nextIdIndex?: number;
}

export interface SharedNode extends Omit<BaseRequest.NodeButton, 'buttons'>, BaseNode.Utils.NodeNextIDs {
  buttons?: ButtonNode[];
  interactions: NodeInteraction[];
}
