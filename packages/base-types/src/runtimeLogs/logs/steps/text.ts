import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type TextStepLog = BaseStepLog<
  StepLogKind.TEXT,
  {
    text: string;
  }
>;
