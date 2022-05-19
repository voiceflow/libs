import { Nullable } from '@voiceflow/common';

import { LoggingNodeType, PathReference } from '../../utils';
import { BaseStepLog } from '../base';

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

export type ButtonsStepLog = BaseStepLog<LoggingNodeType.BUTTONS, FollowPathButtonLogMessage | GoToIntentButtonLogMessage>;
