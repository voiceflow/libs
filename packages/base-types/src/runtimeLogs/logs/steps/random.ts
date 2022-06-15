import { PathReference } from '../../utils';
import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type RandomStepLog = BaseStepLog<
  StepLogKind.RANDOM,
  {
    path: PathReference | null;
  }
>;
