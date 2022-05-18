export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  VERBOSE = 'verbose',
}

const logLevelValues: Readonly<Record<LogLevel, number>> = {
  [LogLevel.ERROR]: 0,
  [LogLevel.WARN]: 1,
  [LogLevel.INFO]: 2,
  [LogLevel.VERBOSE]: 3,
};

/** Returns the number (non-negative integer) value of `level`. A higher number is more verbose. `0` is the least verbose and most "important". */
export const getValueForLogLevel = (level: LogLevel): number => logLevelValues[level];
