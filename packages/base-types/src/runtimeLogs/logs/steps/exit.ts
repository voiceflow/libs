import type { PathReference } from '@base-types/runtimeLogs/utils';
import type { EmptyObject } from '@voiceflow/common';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';
import type { LogLevel } from '../levels';

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
