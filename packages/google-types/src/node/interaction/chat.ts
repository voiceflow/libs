import { ChatNode } from '@voiceflow/chat-types';

import { SharedNode } from './base';

export interface ChatStepData extends ChatNode.Interaction.StepData {}

export interface ChatStep extends ChatNode.Interaction.Step<ChatStepData> {}

export interface ChatNode extends Omit<ChatNode.Interaction.Node, 'interactions' | 'buttons'>, SharedNode {}
