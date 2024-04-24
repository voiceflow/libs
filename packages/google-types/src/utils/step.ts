import type * as Node from '@google-types/node';
import { BaseNode, BaseUtils } from '@voiceflow/base-types';

export const isSpeak = BaseUtils.step.createStepTypeguard<Node.Speak.Step>(BaseNode.NodeType.SPEAK);
export const isPrompt = BaseUtils.step.createStepTypeguard<Node.Prompt.Step>(BaseNode.NodeType.PROMPT);
export const isStream = BaseUtils.step.createStepTypeguard<Node.Stream.Step>(BaseNode.NodeType.STREAM);
export const isButtons = BaseUtils.step.createStepTypeguard<Node.Buttons.Step>(BaseNode.NodeType.BUTTONS);
export const isCapture = BaseUtils.step.createStepTypeguard<Node.Capture.Step>(BaseNode.NodeType.CAPTURE);
export const isCaptureV2 = BaseUtils.step.createStepTypeguard<Node.CaptureV2.Step>(BaseNode.NodeType.CAPTURE_V2);
