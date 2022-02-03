import { BaseButton, BaseNode, BaseRequest } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface VoiceStepData extends VoiceNode.Interaction.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Interaction.Step<VoiceStepData> {}

export interface VoiceNode<Event = BaseNode.Utils.BaseEvent> extends VoiceNode.Interaction.Node<Event>, BaseRequest.NodeButton {}
