import type { Voice } from '@google-types/constants';
import type { BaseButton } from '@voiceflow/base-types';
import type { VoiceNode } from '@voiceflow/voice-types';

import type { SharedNode } from './base';

export interface VoiceStepData extends VoiceNode.Interaction.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Interaction.Step<VoiceStepData> {}

export interface VoiceNode extends Omit<VoiceNode.Interaction.Node, 'interactions'>, SharedNode {}
