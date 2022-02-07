import { BaseNode, BaseUtils } from '@voiceflow/base-types';

import * as Node from '@/node';

export const isSpeak = BaseUtils.node.createNodeTypeguard<Node.Speak.Node>(BaseNode.NodeType.SPEAK);
export const isStream = BaseUtils.node.createNodeTypeguard<Node.Stream.Node>(BaseNode.NodeType.STREAM);
export const isCapture = BaseUtils.node.createNodeTypeguard<Node.Capture.Node>(BaseNode.NodeType.CAPTURE);
export const isDisplay = BaseUtils.node.createNodeTypeguard<Node.Display.Node>(Node.NodeType.DISPLAY);
export const isPayment = BaseUtils.node.createNodeTypeguard<Node.Payment.Node>(Node.NodeType.PAYMENT);
export const isReminder = BaseUtils.node.createNodeTypeguard<Node.Reminder.Node>(Node.NodeType.REMINDER);
export const isUserInfo = BaseUtils.node.createNodeTypeguard<Node.UserInfo.Node>(Node.NodeType.USER_INFO);
export const isCaptureV2 = BaseUtils.node.createNodeTypeguard<Node.CaptureV2.Node>(BaseNode.NodeType.CAPTURE_V2);
export const isPermission = BaseUtils.node.createNodeTypeguard<Node.Permission.Node>(Node.NodeType.PERMISSION);
export const isInteraction = BaseUtils.node.createNodeTypeguard<Node.Interaction.Node>(BaseNode.NodeType.INTERACTION);
export const isCancelPayment = BaseUtils.node.createNodeTypeguard<Node.CancelPayment.Node>(Node.NodeType.CANCEL_PAYMENT);
export const isAccountLinking = BaseUtils.node.createNodeTypeguard<Node.AccountLinking.Node>(Node.NodeType.ACCOUNT_LINKING);
