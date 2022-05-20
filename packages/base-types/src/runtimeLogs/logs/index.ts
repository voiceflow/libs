import * as Logs from './logs';

export * as Kinds from './kinds';

export { Logs };
export { LogLevel } from './levels';

/** All possible runtime logs. */
export type Log = Logs.GlobalLog | Logs.StepLog;
