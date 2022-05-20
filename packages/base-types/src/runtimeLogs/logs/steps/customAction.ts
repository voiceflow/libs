import { Nullable } from '@voiceflow/common';

import { PathReference } from '../../utils';
import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type CustomActionStepLog = BaseStepLog<
  StepLogKind.CUSTOM_ACTION,
  {
    actionBody: Nullable<string>;
    path: PathReference;
  }
>;
