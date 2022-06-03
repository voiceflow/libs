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
        data: any;
        error: null;
        changedVariables: Record<string, ChangedVariable<any>>;
      },
      LogLevel.INFO
    >
  | BaseStepLog<
      StepLogKind.CUSTOM_CODE,
      {
        data: null;
        error: any;
        changedVariables: Record<string, ChangedVariable<any>>;
      },
      LogLevel.ERROR
    >;
