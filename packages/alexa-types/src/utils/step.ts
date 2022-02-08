import * as Node from '@alexa-types/node';
import { BaseNode, BaseUtils } from '@voiceflow/base-types';

export const isSpeak = BaseUtils.step.createStepTypeguard<Node.Speak.Step>(BaseNode.NodeType.SPEAK);
export const isPrompt = BaseUtils.step.createStepTypeguard<Node.Prompt.Step>(BaseNode.NodeType.PROMPT);
export const isStream = BaseUtils.step.createStepTypeguard<Node.Stream.Step>(BaseNode.NodeType.STREAM);
export const isCapture = BaseUtils.step.createStepTypeguard<Node.Capture.Step>(BaseNode.NodeType.CAPTURE);
export const isDisplay = BaseUtils.step.createStepTypeguard<Node.Display.Step>(Node.NodeType.DISPLAY);
export const isPayment = BaseUtils.step.createStepTypeguard<Node.Payment.Step>(Node.NodeType.PAYMENT);
export const isReminder = BaseUtils.step.createStepTypeguard<Node.Reminder.Step>(Node.NodeType.REMINDER);
export const isUserInfo = BaseUtils.step.createStepTypeguard<Node.UserInfo.Step>(Node.NodeType.USER_INFO);
export const isCaptureV2 = BaseUtils.step.createStepTypeguard<Node.CaptureV2.Step>(BaseNode.NodeType.CAPTURE_V2);
export const isPermission = BaseUtils.step.createStepTypeguard<Node.Permission.Step>(Node.NodeType.PERMISSION);
export const isInteraction = BaseUtils.step.createStepTypeguard<Node.Interaction.Step>(BaseNode.NodeType.INTERACTION);
export const isCancelPayment = BaseUtils.step.createStepTypeguard<Node.CancelPayment.Step>(Node.NodeType.CANCEL_PAYMENT);
export const isAccountLinking = BaseUtils.step.createStepTypeguard<Node.AccountLinking.Step>(Node.NodeType.ACCOUNT_LINKING);
