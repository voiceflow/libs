import type { PathReference } from '@base-types/runtimeLogs/utils';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

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
