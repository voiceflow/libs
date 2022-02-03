import { BaseButton } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface VoiceStepData extends VoiceNode.Prompt.StepData<Voice>, BaseButton.StepButton {}

export interface VoiceStep extends VoiceNode.Prompt.Step<VoiceStepData> {}
