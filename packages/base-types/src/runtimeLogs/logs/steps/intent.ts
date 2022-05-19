import { LoggingNodeType } from '../../utils';
import { BaseStepLog } from '../base';

export type IntentStepLog = BaseStepLog<
  LoggingNodeType.INTENT,
  {
    intentName: string;
    utterance: string;
    confidence: number;

    slots: Array<{
      utteredValue: string;
      canonicalValue: string;
    }>;
  }
>;
