import type { AnyRecord } from '@common/types';

export const getKeys = <T extends AnyRecord>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[];
