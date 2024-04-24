import type { ChatNode } from '@voiceflow/chat-types';

export interface ChatStepData extends ChatNode.CaptureV2.StepData {}

export interface ChatStep extends ChatNode.CaptureV2.Step<ChatStepData> {}

export interface ChatNode extends ChatNode.CaptureV2.Node {}
