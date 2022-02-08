import { ChatNode, ChatStep, ChatStepData } from './chat';
import { VoiceNode, VoiceStep, VoiceStepData } from './voice';

export * from './base';
export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;

export type StepData = ChatStepData | VoiceStepData;

export type Node = ChatNode | VoiceNode;
