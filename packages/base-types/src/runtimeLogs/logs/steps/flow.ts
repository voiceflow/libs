import { FlowReference, PathReference, ValueChange } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type FlowStepLog = BaseStepLog<
  StepLogKind.FLOW,
  PathReference & {
    flow: null | ValueChange<FlowReference>;
  }
>;
