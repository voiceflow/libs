import { BaseNode } from '@voiceflow/base-types';

import { ChatNode, ChatStep, ChatStepData } from './chat';
import { VoiceNode, VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

/** @deprecated */
export type Step = ChatStep | VoiceStep;

/** @deprecated */
export type StepPorts = BaseNode.Capture.StepPorts;

/** @deprecated */
export type StepData = ChatStepData | VoiceStepData;

/** @deprecated */
export type Node = ChatNode | VoiceNode;
