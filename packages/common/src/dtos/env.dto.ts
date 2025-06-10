import { z } from 'zod';

export const zOptionalBooleanString = (defaultValue = false) =>
  z
    .union([z.literal(String(true)), z.literal(String(false))])
    .optional()
    .default(String(defaultValue))
    .transform((value) => value === String(true));
