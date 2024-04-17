import type { BaseNode } from '@voiceflow/base-types';

import type { ChatStep, ChatStepData } from './chat';
import type { VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;
export type StepPorts = BaseNode.Prompt.StepPorts;
export type StepData = ChatStepData | VoiceStepData;
