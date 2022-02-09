import { ChatNode } from '@voiceflow/chat-types';

export interface ChatStepData extends ChatNode.Interaction.StepData {}

export interface ChatStep extends ChatNode.Interaction.Step<ChatStepData> {}

export interface ChatNode extends ChatNode.Interaction.Node {}
