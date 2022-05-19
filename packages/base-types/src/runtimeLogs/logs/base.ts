import { EmptyObject } from '@voiceflow/common';

import { GlobalLogKinds, Iso8601Timestamp, LoggingNodeType, PathReference } from '../utils';
import { LogLevel } from '../utils/logs';

/** The base log interface. This should not be used directly, use one of the subtypes instead. */
interface BaseLog {
  kind: string;
  timestamp: Iso8601Timestamp;
  message: EmptyObject;
  level: LogLevel;
}

export interface BaseGlobalLog<Kind extends GlobalLogKinds, Message extends EmptyObject, Level extends LogLevel = LogLevel.INFO> extends BaseLog {
  kind: `global.${Kind}`;
  level: Level;
  message: Message;
}

export interface BaseStepLog<Kind extends LoggingNodeType, Message extends EmptyObject, Level extends LogLevel = LogLevel.INFO> extends BaseLog {
  kind: `step.${Kind}`;
  level: Level;
  message: PathReference & Message;
}
