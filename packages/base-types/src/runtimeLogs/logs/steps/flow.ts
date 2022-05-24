import { PathReference } from '../../utils';
import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type FlowStepLog = BaseStepLog<
  StepLogKind.FLOW,
  {
    path: PathReference;
  }
>;
