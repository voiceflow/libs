import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';
import { LogLevel } from '../levels';

export type CodeStepLog =
  | BaseStepLog<
      StepLogKind.CUSTOM_CODE,
      {
        data: any;
        error: null;
      },
      LogLevel.INFO
    >
  | BaseStepLog<
      StepLogKind.CUSTOM_CODE,
      {
        data: null;
        error: any;
      },
      LogLevel.ERROR
    >;
