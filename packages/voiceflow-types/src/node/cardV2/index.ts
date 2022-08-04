import { BaseNode } from '@voiceflow/base-types';

import { ChatStep, ChatStepData } from './chat';
import { VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;

export type StepPorts = BaseNode.CardV2.StepPorts;

export type StepData = ChatStepData | VoiceStepData;
