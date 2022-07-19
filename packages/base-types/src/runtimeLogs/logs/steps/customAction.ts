import { Nullable } from '@voiceflow/common';

import { PathReference } from '../../utils';
import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type CustomActionStepLog = BaseStepLog<
  StepLogKind.CUSTOM_ACTION,
  Record<keyof PathReference, null> & {
    actionBody: Nullable<string>;
    path: PathReference;
  }
>;
