import type { BaseNode } from '@voiceflow/base-types';

import type { VoiceflowPrompt } from '../utils';
import type { ChatStep, ChatStepData } from './chat';

export * from './chat';

export type Step = ChatStep;

export type StepPorts = BaseNode.Carousel.StepPorts;

export type StepData = ChatStepData;

export interface Node extends BaseNode.Carousel.Node {
  noMatch?: BaseNode.Utils.NodeNoMatch<VoiceflowPrompt> | null;
  noReply?: BaseNode.Utils.NodeNoReply<VoiceflowPrompt> | null;
}
