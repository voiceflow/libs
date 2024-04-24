import type { ChatStep, ChatStepData } from './chat';
import type { VoiceStep, VoiceStepData } from './voice';

export * from './base';
export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;
export type StepData = ChatStepData | VoiceStepData;
