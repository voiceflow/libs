import type { FlowReference, PathReference, ValueChange } from '@base-types/runtimeLogs/utils';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type FlowStepLog = BaseStepLog<
  StepLogKind.FLOW,
  PathReference & {
    flow: null | ValueChange<FlowReference>;
  }
>;
