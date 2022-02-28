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

export type PartialRecord<K extends PropertyKey, T> = Partial<Record<K, T>>;

export type NullableRecord<T> = { [K in keyof T]: Nullable<T[K]> };

export type NonNullishRecord<T> = Required<{ [K in keyof T]: NonNullable<T[K]> }>;

export type Struct = Record<string, unknown>;
export type AnyRecord = Record<string, any>;

export type DeepPartial<T> = {
  [P in keyof T]?: T extends object ? DeepPartial<T[P]> : T;
};

/**
 * An object with no keys or values.
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
 */
export type EmptyObject = Record<never, never>;

/** Avoids accidentally converting an immutable array type to a mutable one. */
export type SafeArray<Element, Original> = Original extends Array<Element>
  ? Element[]
  : Original extends ReadonlyArray<Element>
  ? ReadonlyArray<Element>
  : Original extends ArrayLike<Element>
  ? ArrayLike<Element>
  : never;

export type ArrayUnionToIntersection<T extends ArrayLike<unknown>> = SafeArray<T[number], T>;

export type PrimitiveMap<T extends PropertyKey> = { [P in T]: P };
