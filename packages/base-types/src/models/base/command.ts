import type { AnyRecord } from '@voiceflow/common';

import type { Variable } from './common';

export interface CommandMapping {
  slot: string;
  variable: Variable;
}

/**
 * @deprecated use BaseCommand instead
 */
export type Command<T extends string = string, D extends AnyRecord = AnyRecord> = {
  type: T;
} & D;

export interface BaseCommand {
  type: string;
}
