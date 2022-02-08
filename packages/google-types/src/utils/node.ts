import * as Node from '@google-types/node';
import { BaseNode, BaseUtils } from '@voiceflow/base-types';

export const isSpeak = BaseUtils.node.createNodeTypeguard<Node.Speak.Node>(BaseNode.NodeType.SPEAK);
export const isStream = BaseUtils.node.createNodeTypeguard<Node.Stream.Node>(BaseNode.NodeType.STREAM);
export const isCapture = BaseUtils.node.createNodeTypeguard<Node.Capture.Node>(BaseNode.NodeType.CAPTURE);
export const isCaptureV2 = BaseUtils.node.createNodeTypeguard<Node.CaptureV2.Node>(BaseNode.NodeType.CAPTURE_V2);
export const isInteraction = BaseUtils.node.createNodeTypeguard<Node.Interaction.Node>(BaseNode.NodeType.INTERACTION);
