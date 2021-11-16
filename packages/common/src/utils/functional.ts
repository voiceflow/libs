/* eslint-disable @typescript-eslint/ban-types */
import { Nullish } from '../types';

export type Transform<T = any, R = T> = (value: T) => R;

export interface Compose {
  <R, T1>(t0: Transform<T1, R>): (value: T1) => R;
  <R, T1, T2>(t0: Transform<T1, T2>, t1: Transform<T2, R>): (value: T1) => R;
  <R, T1, T2, T3>(t0: Transform<T1, T2>, t1: Transform<T2, T3>, t2: Transform<T3, R>): (value: T1) => R;
  <R, T1, T2, T3, T4>(t0: Transform<T1, T2>, t1: Transform<T2, T3>, t2: Transform<T3, T4>, t3: Transform<T4, R>): (value: T1) => R;
  <R, T1, T2, T3, T4, T5>(t0: Transform<T1, T2>, t1: Transform<T2, T3>, t2: Transform<T3, T4>, t3: Transform<T4, T5>, t4: Transform<T5, R>): (
    value: T1
  ) => R;
  <R, T1, T2, T3, T4, T5, T6>(
    t0: Transform<T1, T2>,
    t1: Transform<T2, T3>,
    t2: Transform<T3, T4>,
    t3: Transform<T4, T5>,
    t4: Transform<T5, T6>,
    t5: Transform<T6, R>
  ): (value: T1) => R;
  (...transforms: Transform[]): <T extends object>(value: T) => T;
}

export const compose: Compose =
  (...transforms: Transform[]) =>
  <T extends object>(value: T): T =>
    [...transforms].reverse().reduce((acc, transform) => transform(acc), value);

export type VoidFunction = () => void;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop: VoidFunction = () => {};

export const identity = <T>(value: T): T => value;

export const stringify = (value: any): string => (typeof value === 'string' ? value : String(value));

type ChainCallback<A extends any[]> = (...args: A) => void;

export const chain =
  <A extends any[]>(...fns: Array<Nullish<ChainCallback<A>>>) =>
  (...args: A): void =>
    fns.forEach((fn) => fn?.(...args));

export const chainVoid =
  (...fns: Array<Nullish<VoidFunction>>) =>
  (): void =>
    chain(...fns)();

export const chainAsync =
  <A extends any[]>(...fns: Array<Nullish<ChainCallback<A>>>) =>
  async (...args: A): Promise<void> => {
    // eslint-disable-next-line no-restricted-syntax
    for (const fn of fns) {
      // eslint-disable-next-line no-await-in-loop
      await fn?.(...args);
    }
  };

export const chainVoidAsync =
  (...fns: Array<Nullish<VoidFunction>>) =>
  (): Promise<void> =>
    chainAsync(...fns)();

export const withEffect =
  <T>(callback: (value: T) => void) =>
  (value: T) => {
    callback(value);

    return value;
  };
