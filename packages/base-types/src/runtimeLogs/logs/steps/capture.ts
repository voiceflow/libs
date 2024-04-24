import type { ChangedVariables, PathReference, VariableValue } from '@base-types/runtimeLogs/utils';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type CaptureStepLog = BaseStepLog<
  StepLogKind.CAPTURE,
  PathReference & ChangedVariables<VariableValue | null, string, VariableValue>
>;
