import { PathReference } from '../../utils';
import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type ConditionStepLog = BaseStepLog<
  StepLogKind.CONDITION,
  {
    path: PathReference | null;
  }
>;
