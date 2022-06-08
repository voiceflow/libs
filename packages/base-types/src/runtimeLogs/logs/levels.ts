export enum LogLevel {
  /** This is a special log level. No logs should ever use this, its only use is denoting when logging should be disabled. */
  OFF = 'off',
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  VERBOSE = 'verbose',
}
