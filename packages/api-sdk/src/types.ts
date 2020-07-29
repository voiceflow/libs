import * as s from 'superstruct';

export type UnknownRecord = Record<string, unknown>;

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export type BaseSchema = Record<string, s.Struct<any>>;

export type Flatten<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

export type OptionalKeys<T> = { [K in keyof T]: undefined extends T[K] ? K : never }[keyof T];

export type RequiredKeys<T> = { [K in keyof T]: undefined extends T[K] ? never : K }[keyof T];

export type OptionalizeObject<T> = Flatten<{ [K in RequiredKeys<T>]: T[K] } & { [K in OptionalKeys<T>]?: T[K] }>;

export type SchemeType<T extends BaseSchema> = OptionalizeObject<{ [K in keyof T]: s.StructType<T[K]> }>;
