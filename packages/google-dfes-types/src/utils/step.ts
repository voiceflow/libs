import * as Node from '@google-dfes-types/node';
import { BaseNode, BaseUtils } from '@voiceflow/base-types';

export const isVisual = BaseUtils.step.createStepTypeguard<Node.Visual.Step>(BaseNode.NodeType.VISUAL);
export const isPayload = BaseUtils.step.createStepTypeguard<Node.Payload.Step>(Node.NodeType.PAYLOAD);
