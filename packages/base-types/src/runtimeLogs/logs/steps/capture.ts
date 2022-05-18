import { LoggingNodeType } from '../../utils';
import { BaseStepLog } from '../base';

// TODO: Make sure there isn't other information that should be included here
export type CaptureStepLog = BaseStepLog<
  LoggingNodeType.CAPTURE,
  {
    slots: Array<{
      utteredValue: string;
      canonicalValue: string;
    }>;
  }
>;
