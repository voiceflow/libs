import { EmptyObject } from '@voiceflow/common';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

// TODO: Consider including information from the global.conversation_start event here
export type StartStepLog = BaseStepLog<StepLogKind.START, EmptyObject>;
