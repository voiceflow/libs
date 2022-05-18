import { LoggingNodeType, PathReference } from '../../utils';
import { BaseStepLog } from '../base';

export type FlowStepLog = BaseStepLog<
  LoggingNodeType.FLOW,
  {
    path: PathReference;
  }
>;
