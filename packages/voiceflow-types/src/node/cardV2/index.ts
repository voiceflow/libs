import type { BaseNode } from '@voiceflow/base-types';

import type { ChatNode, ChatStep, ChatStepData } from './chat';
import type { VoiceNode, VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;

export type StepPorts = BaseNode.CardV2.StepPorts;

export type StepData = ChatStepData | VoiceStepData;

export type Node = ChatNode | VoiceNode;
