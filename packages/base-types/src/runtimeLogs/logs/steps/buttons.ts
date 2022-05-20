import { Nullable } from '@voiceflow/common';

import { PathReference } from '../../utils';
import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

interface UrlButtonLogMessage {
  url: Nullable<string>;
}

interface FollowPathButtonLogMessage extends UrlButtonLogMessage {
  intent: null;
  path: PathReference;
}

interface GoToIntentButtonLogMessage extends UrlButtonLogMessage {
  intent: string;
  path: null;
}

export type ButtonsStepLog = BaseStepLog<StepLogKind.BUTTONS, FollowPathButtonLogMessage | GoToIntentButtonLogMessage>;
