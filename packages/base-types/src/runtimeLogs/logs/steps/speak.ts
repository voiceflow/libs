import { PathReference } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type SpeakStepLog = BaseStepLog<
  StepLogKind.SPEAK,
  (PathReference | Record<keyof PathReference, null>) & {
    text: string;
  }
>;
