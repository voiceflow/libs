import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';
import { LogLevel } from '../levels';

interface ChangedVariable<T> {
  before: T;
  after: T;
}

export type CodeStepLog =
  | BaseStepLog<
      StepLogKind.CUSTOM_CODE,
      {
        error: null;
        changedVariables: Record<string, ChangedVariable<any>>;
      },
      LogLevel.INFO
    >
  | BaseStepLog<
      StepLogKind.CUSTOM_CODE,
      {
        error: any;
        changedVariables: null;
      },
      LogLevel.ERROR
    >;
