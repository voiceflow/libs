export {
  /** @deprecated Use `AnyRecord` from `@voiceflow/common`. */
  AnyRecord,
  /** @deprecated Use `EmptyObject` from `@voiceflow/common`. */
  EmptyObject as EmptyRecord,
  /** @deprecated Use `Nullable` from `@voiceflow/common`. */
  Nullable,
  /** @deprecated Use `Struct` from `@voiceflow/common`. */
  Struct as UnknownRecord,
} from '@voiceflow/common';

export type DeepPartialByKey<T, K extends keyof T> = {
  [P in keyof T]?: P extends K ? Partial<T[P]> : T[P];
};
