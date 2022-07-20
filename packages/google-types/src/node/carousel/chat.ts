import * as ChatTypes from '@voiceflow/chat-types';

export interface ChatStepData extends ChatTypes.ChatNode.Carousel.StepData {}

export interface ChatStep extends ChatTypes.ChatNode.Carousel.Step<ChatStepData> {}

export interface ChatNode extends ChatTypes.ChatNode.Carousel.Node {}
