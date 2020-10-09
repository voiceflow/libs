import * as s from 'superstruct';

export type UnknownRecord = Record<string, unknown>;

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export type BaseSchema = Record<string, s.Struct<any, any>>;

export type Flatten<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

export type OptionalKeys<T> = { [K in keyof T]: undefined extends T[K] ? K : never }[keyof T];

export type RequiredKeys<T> = { [K in keyof T]: undefined extends T[K] ? never : K }[keyof T];

export type OptionalizeObject<T> = Flatten<{ [K in RequiredKeys<T>]: T[K] } & { [K in OptionalKeys<T>]?: T[K] }>;

export type SchemeType<T extends BaseSchema> = OptionalizeObject<{ [K in keyof T]: s.StructType<T[K]> }>;

export type PutPostType<S extends Record<string, any>, K extends keyof S, E extends keyof S> = Omit<S, K | E> & Partial<Pick<S, K>>;

export type PutPostSchemeType<S extends BaseSchema, K extends keyof SchemeType<S>, E extends keyof SchemeType<S>> = Omit<SchemeType<S>, K | E> &
  Partial<Pick<SchemeType<S>, K>>;

export type PutPostStruct<S extends BaseSchema, K extends keyof SchemeType<S>, E extends keyof SchemeType<S>> = s.Struct<
  PutPostSchemeType<S, K, E>,
  Omit<S, E>
>;
