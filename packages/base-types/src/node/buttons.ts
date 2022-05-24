import { Nullable } from '@voiceflow/common';

import { StepButtonsLayout } from '../button';
import { NodeType } from './constants';
import { BaseNoMatchStepData, BaseNoReplyStepData, BaseStep, BaseStepNoMatch, DataID, NoMatchNoReplyStepPorts, StepIntentScope } from './utils';

export enum ButtonAction {
  URL = 'URL',
  PATH = 'PATH',
  INTENT = 'INTENT',
}

export interface Button extends DataID {
  url?: Nullable<string>;
  name: string;
  intent?: Nullable<string>;
  actions: ButtonAction[];
  diagramID?: Nullable<string>;
}

export interface StepData extends StepButtonsLayout, BaseNoReplyStepData, StepIntentScope, BaseNoMatchStepData {
  buttons: Button[];

  /**
   * @deprecated use noMatch instead
   */
  else?: BaseStepNoMatch;
}

export interface StepPorts extends NoMatchNoReplyStepPorts {}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.BUTTONS;
}
