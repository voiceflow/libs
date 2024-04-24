import type { PathReference } from '../../utils';
import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type ConditionStepLog = BaseStepLog<
  StepLogKind.CONDITION,
  PathReference & {
    path: PathReference | null;
  }
>;
