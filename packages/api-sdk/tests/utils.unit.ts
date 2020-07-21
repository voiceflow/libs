import { expect } from 'chai';
import * as s from 'superstruct';

import { createPutAndPostStruct, dynamicObject } from '@/utils';

describe('utils', () => {
  it('createPutAndPostStruct', () => {
    const struct = s.object({
      id: s.number(),
      key: s.string(),
      field1: s.boolean(),
      field2: s.array(s.string()),
    });

    const postAndPutStruct = createPutAndPostStruct(struct.schema, 'id');

    expect(postAndPutStruct.schema).to.eql({
      key: struct.schema.key,
      field1: struct.schema.field1,
      field2: struct.schema.field2,
    });
  });

  it('createPutAndPostStruct with created', () => {
    const symbol = Symbol('new');

    const struct = s.object({
      id: s.number(),
      key: s.string(),
      field1: s.boolean(),
      field2: s.array(s.string()),
      created: s.string(),
      [symbol]: s.number(), // just for tests
    });

    const postAndPutStruct = createPutAndPostStruct(struct.schema, symbol);

    expect(postAndPutStruct.schema).to.eql({
      id: struct.schema.id,
      key: struct.schema.key,
      field1: struct.schema.field1,
      field2: struct.schema.field2,
    });
  });

  it('createPutAndPostStruct dynamic object', () => {
    const struct = dynamicObject({
      id: s.number(),
      key: s.string(),
    });

    const postAndPutStruct = createPutAndPostStruct(struct.schema, 'id');

    expect(postAndPutStruct.schema).to.eql({
      key: struct.schema.key,
    });
  });

  it('dynamicObject', () => {
    const Struct = dynamicObject({ id: s.string() });

    s.assert({ id: 'as' }, Struct);
    s.assert({ id: '1', bbb: 'asdas', aaa: 12312 }, Struct);

    try {
      s.assert({ id: 1, bbb: 'asdas', aaa: 12312 }, Struct);
      expect.fail('error is not thrown');
    } catch (err) {
      expect(err).to.be.instanceOf(s.StructError);
    }

    try {
      s.assert({ bbb: 'asdas', aaa: 12312 }, Struct);
      expect.fail('error is not thrown');
    } catch (err) {
      expect(err).to.be.instanceOf(s.StructError);
    }

    try {
      s.assert(null, Struct);
      expect.fail('error is not thrown');
    } catch (err) {
      expect(err).to.be.instanceOf(s.StructError);
    }

    try {
      s.assert(12, Struct);
      expect.fail('error is not thrown');
    } catch (err) {
      expect(err).to.be.instanceOf(s.StructError);
    }
  });
});
