/**
 * Copied from the implementation found in `@nest-zod/z` since it recommended to migrate to bare `zod`
 * https://github.com/BenLorantfy/nestjs-zod/blob/main/packages/z/src/z/generic-types/json.ts
 */

import type { ZodSchema } from 'zod';
import { z } from 'zod';

type Literal = boolean | number | string;
export type JSON = Literal | { [key: string]: JSON } | JSON[];

const literal = z.union([z.string(), z.number(), z.boolean()]);

const DEFAULT_MESSAGE = 'Expected value to be a JSON-serializable';

export const zJSON = (message: string = DEFAULT_MESSAGE) => {
  const schema: ZodSchema<JSON> = z.lazy(() =>
    z.union([literal, z.array(schema), z.record(schema)], {
      invalid_type_error: message,
    })
  );

  return schema;
};
