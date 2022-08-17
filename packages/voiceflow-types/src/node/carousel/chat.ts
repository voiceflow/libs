import { ChatNode } from '@voiceflow/chat-types';

export interface ChatStepData extends ChatNode.Carousel.StepData {}

export interface ChatStep extends ChatNode.Carousel.Step<ChatStepData> {}
