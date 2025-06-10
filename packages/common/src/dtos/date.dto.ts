import { z } from 'zod';

export const zDateString = () =>
  z
    .string()
    .datetime()
    .transform((value) => new Date(value));
