import { EmptyObject } from '@voiceflow/common';

import { LoggingNodeType } from '../../utils';
import { BaseStepLog } from '../base';

export type ExitStepLog = BaseStepLog<
  LoggingNodeType.EXIT,
  {
    /** The state of the program on exit. */
    state: EmptyObject;
  }
>;
