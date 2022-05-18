import { LoggingNodeType, PathReference } from '../../utils';
import { BaseStepLog } from '../base';

export type RandomStepLog = BaseStepLog<
  LoggingNodeType.RANDOM,
  {
    path: PathReference;
  }
>;
