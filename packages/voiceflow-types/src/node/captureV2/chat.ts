import type { BaseButton } from '@voiceflow/base-types';
import type { ChatNode } from '@voiceflow/chat-types';

export interface ChatStepData extends ChatNode.CaptureV2.StepData, BaseButton.StepButton {}

export interface ChatStep extends ChatNode.CaptureV2.Step<ChatStepData> {}
