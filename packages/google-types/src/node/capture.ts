import { Button } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

import { ButtonNode } from './buttons';

/** @deprecated */
export interface StepData extends Node.Capture.StepData<Voice>, Button.StepButton {}

/** @deprecated */
export interface Step extends Node.Capture.Step<StepData> {}

/** @deprecated */
export interface Node extends Node.Capture.Node {
  buttons?: ButtonNode[];
}
