import { PathReference } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type IntentStepLog = BaseStepLog<
  StepLogKind.INTENT,
  PathReference & {
    intentName: string;
    utterance: string;
    confidence: number;

    slots: Array<{
      utteredValue: string;
      canonicalValue: string;
    }>;
  }
>;
