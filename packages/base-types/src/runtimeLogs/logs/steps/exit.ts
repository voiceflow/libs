import { PathReference } from '@base-types/runtimeLogs/utils';
import { EmptyObject } from '@voiceflow/common';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';
import { LogLevel } from '../levels';

export type ExitStepLog =
  // Non-verbose mode doesn't include the state
  | BaseStepLog<
      StepLogKind.EXIT,
      PathReference & {
        state: null;
      },
      LogLevel.INFO
    >
  // Verbose mode
  | BaseStepLog<
      StepLogKind.EXIT,
      PathReference & {
        /** The state of the program on exit. */
        state: EmptyObject;
      },
      LogLevel.VERBOSE
    >;
