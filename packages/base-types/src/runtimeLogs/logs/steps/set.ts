import type { ChangedVariables, PathReference } from '@base-types/runtimeLogs/utils';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type SetStepLog = BaseStepLog<StepLogKind.SET, PathReference & ChangedVariables<any>>;
