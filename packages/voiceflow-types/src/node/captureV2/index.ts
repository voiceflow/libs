import { BaseNode } from '@voiceflow/base-types';

import { ChatNode, ChatStep, ChatStepData } from './chat';
import { VoiceNode, VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;

export type StepPorts = BaseNode.CaptureV2.StepPorts;

export type StepData = ChatStepData | VoiceStepData;

export type Node = ChatNode | VoiceNode;
