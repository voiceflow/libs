import { ChangedVariables, PathReference, VariableValue } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type CaptureStepLog = BaseStepLog<StepLogKind.CAPTURE, PathReference & ChangedVariables<VariableValue | null, string, VariableValue>>;
