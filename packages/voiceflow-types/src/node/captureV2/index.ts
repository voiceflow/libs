import type { BaseNode } from '@voiceflow/base-types';

import type { VoiceflowPrompt } from '../utils';
import type { ChatStep, ChatStepData } from './chat';
import type { VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;

export type StepPorts = BaseNode.CaptureV2.StepPorts;

export type StepData = ChatStepData | VoiceStepData;

export interface Node extends BaseNode.CaptureV2.Node {
  noMatch?: BaseNode.Utils.NodeNoMatch<VoiceflowPrompt> | null;
  noReply?: BaseNode.Utils.NodeNoReply<VoiceflowPrompt> | null;
}
