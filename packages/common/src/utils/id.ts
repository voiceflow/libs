import ObjectId from 'bson-objectid';
import cuid from 'cuid';

export { cuid };

export const objectID = (): string => new ObjectId().toHexString();
