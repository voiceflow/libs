import { ChatNode } from '@voiceflow/chat-types';

export interface ChatStepData extends ChatNode.Prompt.StepData {}

export interface ChatStep extends ChatNode.Prompt.Step<ChatStepData> {}
