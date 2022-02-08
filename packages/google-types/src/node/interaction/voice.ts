import { Voice } from '@google-types/constants';
import { BaseButton } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';

import { SharedNode } from './base';

export interface VoiceStepData extends VoiceNode.Interaction.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Interaction.Step<VoiceStepData> {}

export interface VoiceNode extends Omit<VoiceNode.Interaction.Node, 'interactions'>, SharedNode {}
