import { expect } from 'chai';
import * as s from 'superstruct';

import { createPutAndPostStruct, dynamicObject, getWindow } from '@/utils';

describe('utils', () => {
  it('createPutAndPostStruct', () => {
    const struct = s.object({
      id: s.number(),
      key: s.string(),
      field1: s.boolean(),
      field2: s.array(s.string()),
    });

    const postAndPutStruct = createPutAndPostStruct(struct.schema, 'id', []);

    expect(postAndPutStruct.schema.id.type).to.eql('number?');
    expect(postAndPutStruct.schema.key).to.eql(struct.schema.key);
    expect(postAndPutStruct.schema.field1).to.eql(struct.schema.field1);
    expect(postAndPutStruct.schema.field2).to.eql(struct.schema.field2);
  });

  it('createPutAndPostStruct dynamic object', () => {
    const struct = dynamicObject({
      id: s.number(),
      key: s.string(),
    });

    const postAndPutStruct = createPutAndPostStruct(struct.schema, 'id', []);

    expect(postAndPutStruct.schema.id.type).to.eql('number?');
    expect(postAndPutStruct.schema.key).to.eql(struct.schema.key);
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

  it('getWindow', () => {
    expect(getWindow()).to.be.eql(null);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.window = {};

    expect(getWindow()).to.be.eql({});

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.window = undefined;
  });
});
