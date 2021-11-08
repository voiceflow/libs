/** @deprecated Use `T[number]` instead of `ArrayElement<T>` */
export type ArrayElement<A> = A extends ArrayLike<unknown> ? A[number] : never;

export type BaseSchema = Record<string, any>;

export type Flatten<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

export type OptionalKeys<T> = { [K in keyof T]: undefined extends T[K] ? K : never }[keyof T];

export type RequiredKeys<T> = { [K in keyof T]: undefined extends T[K] ? never : K }[keyof T];

export type OptionalizeObject<T> = Flatten<{ [K in RequiredKeys<T>]: T[K] } & { [K in OptionalKeys<T>]?: T[K] }>;

export type SchemeType<T extends BaseSchema> = OptionalizeObject<T>;

export type PutPostType<S extends Record<string, any>, K extends keyof S, E extends keyof S> = Omit<S, K | E> & Partial<Pick<S, K>>;
