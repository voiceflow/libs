import { Nullable } from '@/utils';

import { StepButtonsLayout } from '../button';
import { NodeType } from './constants';
import { BaseStep, BaseStepNoMatch, BaseStepNoReply, DataID } from './utils';

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

export interface StepData extends StepButtonsLayout {
  else: BaseStepNoMatch;
  buttons: Button[];
  noReply?: Nullable<BaseStepNoReply>;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.BUTTONS;
}
