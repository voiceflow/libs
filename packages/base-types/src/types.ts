export type Nullable<T> = T | null;

export type AnyRecord = Record<string, any>;

export type UnknownRecord = Record<string, unknown>;

export type EmptyRecord = Record<string, never>;

export type DeepPartialByKey<T, K extends keyof T> = {
  [P in keyof T]?: P extends K ? Partial<T[P]> : T[P];
};
