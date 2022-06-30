import { ChangedVariables, VariableValue } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type CaptureStepLog = BaseStepLog<StepLogKind.CAPTURE, ChangedVariables<VariableValue | null, string, VariableValue>>;
