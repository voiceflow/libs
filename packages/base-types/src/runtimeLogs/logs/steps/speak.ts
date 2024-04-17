import type { PathReference } from '@base-types/runtimeLogs/utils';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type SpeakStepLog = BaseStepLog<
  StepLogKind.SPEAK,
  (PathReference | Record<keyof PathReference, null>) & {
    text: string;
  }
>;
