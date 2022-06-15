import { ChangedVariables } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type SetStepLog = BaseStepLog<StepLogKind.SET, ChangedVariables<any>>;
