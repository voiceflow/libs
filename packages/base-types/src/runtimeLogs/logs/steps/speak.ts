import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type SpeakStepLog = BaseStepLog<
  StepLogKind.SPEAK,
  {
    text: string;
  }
>;
