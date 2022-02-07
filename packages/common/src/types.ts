/* eslint-disable @typescript-eslint/ban-types */
export type Nullable<T> = T | null;
export type Nullish<T = unknown> = Nullable<T> | undefined;

export type Function<A extends any[] = any[], R = any> = (...args: A) => R;

export type AnyFunction = Function<any[], any>;

export type Callback = Function<[], Eventual<void>>;

export type Eventual<T> = Promise<T> | T;

export type StringifyEnum<T extends string> = T | `${T}`;

export type NormalizedValue<T> = T extends Normalized<infer R> ? R : never;

export interface Normalized<T> {
  byKey: Record<string, T>;
  allKeys: string[];
}

export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type WithRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type NullableRecord<T extends object> = { [K in keyof T]: Nullable<T[K]> };

export type NonNullishRecord<T extends object> = Required<{ [K in keyof T]: NonNullable<T[K]> }>;

export type Struct = Record<string, unknown>;

/**
 * An object with no keys or values.
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
 */
export type EmptyObject = Record<never, never>;

export type ArrayElem<A> = A extends Array<infer Elem> ? Elem : never;

export const inferUnion = <T>(array: T): Array<ArrayElem<T>> => array as any as Array<ArrayElem<T>>;
