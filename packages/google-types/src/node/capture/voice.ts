import { Voice } from '@google-types/constants';
import { BaseButton } from '@voiceflow/base-types';
import { VoiceNode } from '@voiceflow/voice-types';

import { SharedNode } from './base';

/** @deprecated */
export interface VoiceStepData extends VoiceNode.Capture.StepData<Voice>, BaseButton.StepButton {}

/** @deprecated */
export interface VoiceStep extends VoiceNode.Capture.Step<VoiceStepData> {}

/** @deprecated */
export interface VoiceNode extends Omit<VoiceNode.Capture.Node, 'buttons'>, SharedNode {}
