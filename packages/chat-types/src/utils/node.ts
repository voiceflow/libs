import type * as Node from '@chat-types/node';
import { BaseNode, BaseUtils } from '@voiceflow/base-types';

export const isCapture = BaseUtils.node.createNodeTypeguard<Node.Capture.Node>(BaseNode.NodeType.CAPTURE);
export const isCaptureV2 = BaseUtils.node.createNodeTypeguard<Node.CaptureV2.Node>(BaseNode.NodeType.CAPTURE_V2);
export const isInteraction = BaseUtils.node.createNodeTypeguard<Node.Interaction.Node>(BaseNode.NodeType.INTERACTION);
