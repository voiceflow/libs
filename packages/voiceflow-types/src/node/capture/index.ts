import { BaseNode, BaseRequest } from '@voiceflow/base-types';

import { VoiceflowPrompt } from '../utils';
import { ChatStep, ChatStepData } from './chat';
import { VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

/** @deprecated */
export type Step = ChatStep | VoiceStep;

/** @deprecated */
export type StepPorts = BaseNode.Capture.StepPorts;

/** @deprecated */
export type StepData = ChatStepData | VoiceStepData;

/** @deprecated */
export interface Node extends BaseNode.Capture.Node, BaseRequest.NodeButton {
  noReply?: BaseNode.Utils.NodeNoReply<VoiceflowPrompt> | null;
}
