import { ChangedVariables, PathReference } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';
import { LogLevel } from '../levels';

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
