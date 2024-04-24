import type { EmptyObject } from '@voiceflow/common';

import type { DEFAULT_LOG_LEVEL, Iso8601Timestamp } from '../utils';
import type { GlobalLogKind, StepLogKind } from './kinds';
import type { LogLevel } from './levels';

/** The base log interface. This should not be used directly, use one of the subtypes instead. */
interface BaseLog {
  kind: string;
  timestamp: Iso8601Timestamp;
  message: EmptyObject;
  level: Exclude<LogLevel, LogLevel.OFF>;
}

export interface BaseGlobalLog<
  Kind extends GlobalLogKind,
  Message extends EmptyObject,
  Level extends Exclude<LogLevel, LogLevel.OFF> = typeof DEFAULT_LOG_LEVEL,
> extends BaseLog {
  kind: `global.${Kind}`;
  level: Level;
  message: Message;
}

export interface BaseStepLog<
  Kind extends StepLogKind,
  Message extends EmptyObject,
  Level extends Exclude<LogLevel, LogLevel.OFF> = typeof DEFAULT_LOG_LEVEL,
> extends BaseLog {
  kind: `step.${Kind}`;
  level: Level;
  message: Message;
}
