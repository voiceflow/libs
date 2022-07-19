import { ChatNode } from '@voiceflow/chat-types';

export interface ChatStepData extends ChatNode.CardV2.StepData {}

export interface ChatStep extends ChatNode.CardV2.Step<ChatStepData> {}
