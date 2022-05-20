import { EmptyObject } from '@voiceflow/common';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';
import { LogLevel } from '../levels';

export type ExitStepLog = BaseStepLog<
  StepLogKind.EXIT,
  {
    /** The state of the program on exit. */
    state: EmptyObject;
  },
  LogLevel.VERBOSE
>;
