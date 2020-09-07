/* eslint-disable dot-notation */

import { expect } from 'chai';
import sinon from 'sinon';
import * as s from 'superstruct';

import CrudResource from '@/resources/crud';

const RESPONSE_DATA = {
  data: { field1: '1', field2: { subfield: [1, 10] } },
  status: 200,
};

const createClient = () => {
  const assert = sinon.stub(s, 'assert');

  const schema = {
    id: s.string(),
    key: s.string(),
    optional: s.optional(s.string()),
  };

  const fetch = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
  };

  const resource = new CrudResource<typeof schema, 'id', any, 'id'>({
    clazz: class {},
    fetch: fetch as any,
    schema: schema as any,
    modelIDKey: 'id',
    resourceEndpoint: 'endpoint',
  });

  return {
    fetch,
    schema,
    assert,
    resource,
  };
};

describe('CrudResource', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('._getCRUDEndpoint', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']()).to.eql('endpoint');
  });

  it('._getCRUDEndpoint with id', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']('1')).to.eql('endpoint/1');
  });

  it('._get', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_get']();

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['endpoint']);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._get fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_get']<{ key: string }>(['key']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['endpoint?fields=key']);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._getByID', async () => {
    const { fetch, schema, assert, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_getByID']('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['endpoint/1']);
    expect(data).to.eql(RESPONSE_DATA.data);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', schema.id]);
  });

  it('._getByID fields', async () => {
    const { fetch, schema, assert, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_getByID']<{ key: string; optional?: string }>('1', ['key', 'optional']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['endpoint/1?fields=key,optional']);
    expect(data).to.eql(RESPONSE_DATA.data);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', schema.id]);
  });

  it('._post', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.post.resolves(RESPONSE_DATA);

    const data = await resource['_post']({ key: 'value' });

    expect(fetch.post.callCount).to.eql(1);
    expect(fetch.post.args[0]).to.eql(['endpoint', { key: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql([{ key: 'value' }, resource['putAndPostStruct']]);
  });

  it('._put', async () => {
    const { fetch, schema, assert, resource } = createClient();

    fetch.put.resolves(RESPONSE_DATA);

    const data = await resource['_put']('1', { key: 'value' });

    expect(fetch.put.callCount).to.eql(1);
    expect(fetch.put.args[0]).to.eql(['endpoint/1', { key: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[0]).to.eql(['1', schema.id]);
    expect(assert.args[1]).to.eql([{ key: 'value' }, resource['putAndPostStruct']]);
  });

  it('._patch', async () => {
    const { fetch, schema, assert, resource } = createClient();

    fetch.patch.resolves(RESPONSE_DATA);

    const data = await resource['_patch']('1', { optional: 'value' });

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['endpoint/1', { optional: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[0]).to.eql(['1', schema.id]);
    expect(assert.args[1]).to.eql([{ optional: 'value' }, resource['patchStruct']]);
  });

  it('._delete', async () => {
    const { fetch, schema, assert, resource } = createClient();

    fetch.delete.resolves(RESPONSE_DATA);

    const data = await resource['_delete']('1');

    expect(fetch.delete.callCount).to.eql(1);
    expect(fetch.delete.args[0]).to.eql(['endpoint/1']);
    expect(data).to.eql('1');
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', schema.id]);
  });
});
