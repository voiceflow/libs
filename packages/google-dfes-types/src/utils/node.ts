import { BaseNode, BaseUtils } from '@voiceflow/base-types';

import * as Node from '@/node';

export const isVisual = BaseUtils.node.createNodeTypeguard<Node.Visual.Node>(BaseNode.NodeType.VISUAL);
export const isPayload = BaseUtils.node.createNodeTypeguard<Node.Payload.Node>(Node.NodeType.PAYLOAD);
