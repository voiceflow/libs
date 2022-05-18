import { LoggingNodeType, PathReference } from '../../utils';
import { BaseStepLog } from '../base';

export type ConditionStepLog = BaseStepLog<
  LoggingNodeType.CONDITION,
  {
    path: PathReference;
  }
>;
