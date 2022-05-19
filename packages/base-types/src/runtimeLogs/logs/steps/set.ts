import { LoggingNodeType } from '../../utils';
import { BaseStepLog } from '../base';

export type SetStepLog = BaseStepLog<
  LoggingNodeType.SET,
  {
    variableName: string;
    expression: string;
  }
>;
