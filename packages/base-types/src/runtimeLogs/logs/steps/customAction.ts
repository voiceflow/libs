import { Nullable } from '@voiceflow/common';

import { LoggingNodeType, PathReference } from '../../utils';
import { BaseStepLog } from '../base';

export type CustomActionStepLog = BaseStepLog<
  LoggingNodeType.CUSTOM_ACTION,
  {
    actionBody: Nullable<string>;
    path: PathReference;
  }
>;
