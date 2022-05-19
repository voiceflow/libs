import { LoggingNodeType } from '../../utils';
import { BaseStepLog } from '../base';

export type SpeakStepLog = BaseStepLog<
  LoggingNodeType.SPEAK,
  {
    text: string;
  }
>;
