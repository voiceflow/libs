import { Nullable } from '@voiceflow/common';

import { StepButtonsLayout } from '../button';
import { NodeType } from './constants';
import { BaseNoMatchStepData, BaseNoReplyStepData, BaseStep, BaseStepNoMatch, DataID, NoMatchNoReplyStepPorts, StepIntentScope } from './utils';

/**
 * @deprecated use `actions` instead
 */
export enum ButtonAction {
  URL = 'URL',
  PATH = 'PATH',
  INTENT = 'INTENT',
}

export interface Button extends DataID {
  name: string;
  intent?: Nullable<string>;

  /**
   * @deprecated use `actions` instead
   */
  url?: Nullable<string>;
  /**
   * @deprecated use `actions` instead
   */
  actions: ButtonAction[];
  /**
   * @deprecated use `actions` instead
   */
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
