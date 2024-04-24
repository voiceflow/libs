import type { Nullish } from '../types';

export const isFunction = <T extends (...args: any[]) => any = (...args: any[]) => any>(value: unknown): value is T =>
  typeof value === 'function';

export type Transform<T = any, R = T> = (value: T) => R;

export interface Compose {
  <R, T1>(t0: Transform<T1, R>): (value: T1) => R;
  <R, T1, T2>(t0: Transform<T1, T2>, t1: Transform<T2, R>): (value: T1) => R;
  <R, T1, T2, T3>(t0: Transform<T1, T2>, t1: Transform<T2, T3>, t2: Transform<T3, R>): (value: T1) => R;
  <R, T1, T2, T3, T4>(
    t0: Transform<T1, T2>,
    t1: Transform<T2, T3>,
    t2: Transform<T3, T4>,
    t3: Transform<T4, R>
  ): (value: T1) => R;
  <R, T1, T2, T3, T4, T5>(
    t0: Transform<T1, T2>,
    t1: Transform<T2, T3>,
    t2: Transform<T3, T4>,
    t3: Transform<T4, T5>,
    t4: Transform<T5, R>
  ): (value: T1) => R;
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
  <T extends object>(value: T): T => {
    if (transforms.length === 1) {
      return transforms[0](value);
    }

    if (transforms.length === 2) {
      return transforms[0](transforms[1](value));
    }

    return transforms.reduceRight((acc, transform) => transform(acc), value);
  };

export type VoidFunction = () => void;

export const noop: VoidFunction = () => undefined;

export const identity = <T>(value: T): T => value;

export const stringify = (value: any): string => (typeof value === 'string' ? value : String(value));

type ChainCallback<A extends any[]> = (...args: A) => void;

export const chain =
  <A extends any[]>(...fns: [Nullish<ChainCallback<A>>, ...Array<Nullish<ChainCallback<A>>>]) =>
  (...args: A): void => {
    // perf optimization, most of the time we have one or two functions
    if (fns.length === 1) {
      fns[0]?.(...args);
    } else if (fns.length === 2) {
      fns[0]?.(...args);
      fns[1]?.(...args);
    } else {
      fns.forEach((fn) => fn?.(...args));
    }
  };

export const chainVoid =
  (...fns: [Nullish<VoidFunction>, ...Array<Nullish<VoidFunction>>]) =>
  (): void =>
    chain(...fns)();

export const chainAsync =
  <A extends any[]>(...fns: [Nullish<ChainCallback<A>>, ...Array<Nullish<ChainCallback<A>>>]) =>
  async (...args: A): Promise<void> => {
    // perf optimization, most of the time we have one or two functions
    if (fns.length === 1) {
      await fns[0]?.(...args);
    } else if (fns.length === 2) {
      await fns[0]?.(...args);
      await fns[1]?.(...args);
    } else {
      for (const fn of fns) {
        // eslint-disable-next-line no-await-in-loop
        await fn?.(...args);
      }
    }
  };

export const chainVoidAsync =
  (...fns: [Nullish<VoidFunction>, ...Array<Nullish<VoidFunction>>]) =>
  (): Promise<void> =>
    chainAsync(...fns)();

export const withEffect =
  <T>(callback: (value: T) => void) =>
  (value: T): T => {
    callback(value);

    return value;
  };
