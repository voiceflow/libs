import { PathReference } from '@base-types/runtimeLogs/utils';
import { EmptyObject } from '@voiceflow/common';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type StartStepLog = BaseStepLog<StepLogKind.START, PathReference | EmptyObject>;
