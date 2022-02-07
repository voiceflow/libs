export const createTypeguardCreator =
  <T>() =>
  <R extends T>(values: R | R[] | ReadonlyArray<R>) =>
  (value?: unknown): value is R =>
    !!value && (Array.isArray(values) ? values.includes(value as R) : values === value);

export const createTypedTypeguardCreator =
  <T extends { type: string } = { type: string }>() =>
  <R extends T>(values: R['type'] | R['type'][]) =>
  (value: T): value is R =>
    Array.isArray(values) ? values.includes(value.type) : value.type === values;
