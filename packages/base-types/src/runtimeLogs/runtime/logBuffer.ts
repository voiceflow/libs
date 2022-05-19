import { Log } from '../logs';

/**
 * It acts as a buffer in between the runtime which produces the logs and the service/datastore which consumes the logs.
 * In practice, this will almost always be implemented as part of the runtime itself.
 */
export interface LogBuffer {
  /** The number of {@link Log} in this {@link LogBuffer}'s buffer. */
  readonly bufferSize: number;

  /** Add {@link Log} to this {@link LogBuffer}'s buffer. */
  push(...logs: Log[]): void;
  /** Dispatch all {@link Log} from this {@link LogBuffer}'s buffer and then remove them. */
  flush(): void;
  /** Remove all {@link Log} from this {@link LogBuffer}'s buffer. */
  clear(): void;
}

export interface AsyncLogBuffer extends LogBuffer {
  flush(): void | Promise<void>;
  clear(): void | Promise<void>;
}
