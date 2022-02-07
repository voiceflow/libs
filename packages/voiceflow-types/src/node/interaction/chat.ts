import { BaseNode } from '@voiceflow/base-types';
import { ChatNode } from '@voiceflow/chat-types';

export interface ChatStepData extends ChatNode.Interaction.StepData {}

export interface ChatStep extends ChatNode.Interaction.Step<ChatStepData> {}

export interface ChatNode<Event = BaseNode.Utils.BaseEvent> extends ChatNode.Interaction.Node<Event> {}
