import { EmptyObject } from '@voiceflow/common';

import { Iso8601Timestamp, PathReference } from '../utils';
import { GlobalLogKind, StepLogKind } from './kinds';
import { LogLevel } from './levels';

/** The base log interface. This should not be used directly, use one of the subtypes instead. */
interface BaseLog {
  kind: string;
  timestamp: Iso8601Timestamp;
  message: EmptyObject;
  level: LogLevel;
}

export interface BaseGlobalLog<Kind extends GlobalLogKind, Message extends EmptyObject, Level extends LogLevel = LogLevel.INFO> extends BaseLog {
  kind: `global.${Kind}`;
  level: Level;
  message: Message;
}

export interface BaseStepLog<Kind extends StepLogKind, Message extends EmptyObject, Level extends LogLevel = LogLevel.INFO> extends BaseLog {
  kind: `step.${Kind}`;
  level: Level;
  message: PathReference & Message;
}
