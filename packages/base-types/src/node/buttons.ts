import { Nullable } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseStep, BaseStepNoMatch, DataID } from './utils';

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
}

export interface StepData {
  name: string;
  noMatch: BaseStepNoMatch;
  buttons: Button[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.BUTTONS;
}
