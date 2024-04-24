import type { ChangedVariables, PathReference } from '@base-types/runtimeLogs/utils';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';
import type { LogLevel } from '../levels';

export type CodeStepLog =
  | BaseStepLog<
      StepLogKind.CUSTOM_CODE,
      PathReference & {
        error: null;
      } & ChangedVariables<any>,
      LogLevel.INFO
    >
  | BaseStepLog<
      StepLogKind.CUSTOM_CODE,
      PathReference & {
        error: any;
      } & Record<keyof ChangedVariables<never>, null>,
      LogLevel.ERROR
    >;
