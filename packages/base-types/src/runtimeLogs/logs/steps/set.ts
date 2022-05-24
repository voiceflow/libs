import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type SetStepLog = BaseStepLog<
  StepLogKind.SET,
  {
    variableName: string;
    expression: string;
  }
>;
