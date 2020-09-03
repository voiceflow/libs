/* eslint-disable dot-notation */

import { expect } from 'chai';
import sinon from 'sinon';
import * as s from 'superstruct';

import BaseResource from '@/resources/base';

const createClient = () => {
  const assert = sinon.stub(s, 'assert');

  const schema = {
    id: s.string(),
    array: s.array(s.string()),
    number: s.number(),
    string: s.optional(s.string()),
    object: s.object({
      string: s.string(),
      boolean: s.boolean(),
    }),
  };

  const fetch = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
    initWithOptions: sinon.stub(),
  };

  class Resource {}

  const resource = new BaseResource<typeof schema, 'id', Resource>({
    fetch: fetch as any,
    clazz: Resource,
    schema: schema as any,
    modelIDKey: 'id',
    resourceEndpoint: 'endpoint',
  });

  return {
    fetch,
    assert,
    schema,
    resource,
    Resource,
  };
};

describe('BaseResource', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('.constructor', () => {
    const { schema, fetch, resource, Resource } = createClient();
    const { id, ...schemeWithoutID } = schema;

    const { id: putAndPostID, ...putAndPostSchemeWithoutID } = resource['putAndPostStruct'].schema;

    expect(resource['fetch']).to.eql(fetch);
    expect(resource['clazz']).to.eql(Resource);
    expect(resource['modelIDKey']).to.eql('id');
    expect(resource['resourceEndpoint']).to.eql('endpoint');
    expect(resource['struct'].schema).to.eql(schema);
    expect(resource['patchStruct'].schema).to.eql(schema);
    expect(resource['patchStruct'].type).to.eql(s.partial(schema as any).type);
    expect(putAndPostSchemeWithoutID).to.eql(schemeWithoutID);
    expect(putAndPostID.type).to.eql('string?');
  });

  it('._getEndpoint', () => {
    const { resource } = createClient();

    expect(resource['_getEndpoint']()).to.eql('endpoint');
  });

  it('._getFieldsQuery', () => {
    const { resource } = createClient();

    expect(resource['_getFieldsQuery']()).to.eql('');
    expect(resource['_getFieldsQuery'](['key', 'key2'])).to.eql('?fields=key,key2');
  });

  it('._assertModelID', () => {
    const { schema, assert, resource } = createClient();

    resource['_assertModelID']('1');

    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', schema.id]);
  });

  it('._assertPatchBody', () => {
    const { assert, resource } = createClient();

    resource['_assertPatchBody']({
      array: ['', 'q'],
      number: 0,
    });

    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql([
      {
        array: ['', 'q'],
        number: 0,
      },
      resource['patchStruct'],
    ]);
  });

  it('._assertPutAndPostBody', () => {
    const { assert, resource } = createClient();

    resource['_assertPutAndPostBody']({
      array: ['', 'q'],
      number: 0,
      object: {
        string: '',
        boolean: false,
      },
    });

    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql([
      {
        array: ['', 'q'],
        number: 0,
        object: {
          string: '',
          boolean: false,
        },
      },
      resource['putAndPostStruct'],
    ]);
  });

  it('.options', () => {
    const { fetch, resource, Resource } = createClient();

    const instance = resource.options({
      headers: { key: 'val' },
    });

    expect(instance).to.be.instanceOf(Resource);
    expect(fetch.initWithOptions.args[0]).to.eql([
      {
        headers: { key: 'val' },
      },
    ]);
  });
});
