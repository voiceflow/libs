import { EmptyObject } from '@voiceflow/common';

import { LoggingNodeType } from '../../utils';
import { BaseStepLog } from '../base';

// TODO: Consider including information from the global.conversation_start event here
export type StartStepLog = BaseStepLog<LoggingNodeType.START, EmptyObject>;
