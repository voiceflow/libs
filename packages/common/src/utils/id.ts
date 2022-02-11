import ObjectId from 'bson-objectid';
import cuid from 'cuid';

export { cuid };

export const objectID = (): string => new ObjectId().toHexString();

export const OBJECT_ID_REGEX = /"([\dA-Fa-f]{24})"/g;

// please feel free to suggest more performant implementations
export const remapObjectIDs = <A>(object: A, map: Record<string, string>): A =>
  JSON.parse(JSON.stringify(object).replace(OBJECT_ID_REGEX, (_, match) => `"${map[match] ?? match}"`));
