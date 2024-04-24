import type { PathReference } from '@base-types/runtimeLogs/utils';
import type { EmptyObject } from '@voiceflow/common';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type StartStepLog = BaseStepLog<StepLogKind.START, PathReference | EmptyObject>;
