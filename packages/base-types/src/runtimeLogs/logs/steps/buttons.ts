import type { Nullable } from '@voiceflow/common';

import type { PathReference } from '../../utils';
import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

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

export type ButtonsStepLog = BaseStepLog<
  StepLogKind.BUTTONS,
  PathReference & (FollowPathButtonLogMessage | GoToIntentButtonLogMessage)
>;
