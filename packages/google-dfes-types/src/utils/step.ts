import { BaseNode, BaseUtils } from '@voiceflow/base-types';

import * as Node from '@/node';

export const isVisual = BaseUtils.step.createStepTypeguard<Node.Visual.Step>(BaseNode.NodeType.VISUAL);
export const isPayload = BaseUtils.step.createStepTypeguard<Node.Payload.Step>(Node.NodeType.PAYLOAD);
