import { ChatNode } from '@voiceflow/chat-types';

export interface ChatStepData extends ChatNode.Buttons.StepData {}

export interface ChatStep extends ChatNode.Buttons.Step<ChatStepData> {}
