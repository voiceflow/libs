import { BaseNode, BaseRequest } from '@voiceflow/base-types';

import { VoiceflowPrompt } from '../utils';
import { ChatStep, ChatStepData } from './chat';
import { VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;

export type StepPorts = BaseNode.Interaction.StepPorts;

export type StepData = ChatStepData | VoiceStepData;

export interface Node<Event = BaseNode.Utils.BaseEvent> extends BaseNode.Interaction.Node<Event>, BaseRequest.NodeButton {
  noMatch?: BaseNode.Utils.NodeNoMatch<VoiceflowPrompt> | null;
  noReply?: BaseNode.Utils.NodeNoReply<VoiceflowPrompt> | null;
}
