import { LogLevel } from '../logs/levels';

const logLevelValues: Readonly<Record<LogLevel, number>> = {
  [LogLevel.ERROR]: 0,
  [LogLevel.WARN]: 1,
  [LogLevel.INFO]: 2,
  [LogLevel.VERBOSE]: 3,
};

/** Returns the number (non-negative integer) value of `level`. A higher number is more verbose. `0` is the least verbose and most "important". */
export const getValueForLogLevel = (level: LogLevel): number => logLevelValues[level];

const ALL_LOG_LEVELS: ReadonlySet<LogLevel> = new Set(Object.values(LogLevel));

export const isLogLevel = (level: string): level is LogLevel => {
  return ALL_LOG_LEVELS.has(level as any);
};
