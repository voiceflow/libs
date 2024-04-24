type TypeNames = 'string' | 'object' | 'number' | 'boolean' | 'undefined';

export const hasRequiredProperty = <T extends string>(
  value: Record<string, unknown>,
  property: T,
  type?: TypeNames | ((value: unknown) => boolean)
) =>
  property in value &&
  (typeof type === 'undefined' ||
    (typeof type === 'string' && typeof value[property] === type) ||
    (typeof type !== 'string' && type(value[property])));

export const hasOptionalProperty = <T extends string>(
  value: Record<string, unknown>,
  property: T,
  type?: TypeNames | ((value: unknown) => boolean)
) =>
  !(property in value) ||
  typeof type === 'undefined' ||
  (typeof type === 'string' && typeof value[property] === type) ||
  (typeof type !== 'string' && type(value[property]));

export const hasRequiredSchema = (value: unknown, schema: (value: Record<string, unknown>) => boolean) => isRecord(value) && schema(value);

export const isArrayOf = (value: unknown, schema: (value: unknown) => boolean) => Array.isArray(value) && value.every(schema);

export const isRecord = (value: unknown): value is Record<string, unknown> => !!value && typeof value === 'object' && !Array.isArray(value);
