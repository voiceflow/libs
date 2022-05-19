import { LoggingNodeType } from '../../utils';
import { BaseStepLog } from '../base';

export type TextStepLog = BaseStepLog<
  LoggingNodeType.TEXT,
  {
    text: string;
  }
>;
