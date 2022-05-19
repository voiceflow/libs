import { LoggingNodeType, LogLevel } from '../../utils';
import { BaseStepLog } from '../base';

export type CodeStepLog =
  | BaseStepLog<
      LoggingNodeType.CUSTOM_CODE,
      {
        data: any;
        error: null;
      },
      LogLevel.INFO
    >
  | BaseStepLog<
      LoggingNodeType.CUSTOM_CODE,
      {
        data: null;
        error: any;
      },
      LogLevel.ERROR
    >;
