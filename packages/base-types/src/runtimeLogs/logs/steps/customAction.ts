import type { Nullable } from '@voiceflow/common';

import type { PathReference } from '../../utils';
import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type CustomActionStepLog = BaseStepLog<
  StepLogKind.CUSTOM_ACTION,
  Record<keyof PathReference, null> & {
    actionBody: Nullable<string>;
    path: PathReference;
  }
>;
