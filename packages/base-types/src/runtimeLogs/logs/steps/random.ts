import type { PathReference } from '../../utils';
import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type RandomStepLog = BaseStepLog<
  StepLogKind.RANDOM,
  PathReference & {
    path: PathReference | null;
  }
>;
