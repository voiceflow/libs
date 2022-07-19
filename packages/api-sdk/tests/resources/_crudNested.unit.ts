/* eslint-disable dot-notation */

import CrudNestedResource from '@api-sdk/resources/crudNested';
import { AnyRecord } from '@voiceflow/common';
import { expect } from 'chai';
import sinon from 'sinon';

const RESPONSE_DATA = {
  data: { field1: '1', field2: { subfield: [1, 10] } },
  status: 200,
};

const createClient = () => {
  const fetch = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
  };

  const resource = new CrudNestedResource<string, { id: string; key: string; optional?: string }, 'id', AnyRecord, 'id'>({
    clazz: class {},
    fetch: fetch as any,
    endpoint: 'endpoint',
    clazzOptions: { parentEndpoint: 'parentEndpoint' },
  });

  return {
    fetch,
    resource,
  };
};

describe('CrudNestedResource', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('._getCRUDEndpoint', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']('parent-id')).to.eql('parentEndpoint/parent-id/endpoint');
  });

  it('._getCRUDEndpoint with id', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']('parent-id', '1')).to.eql('parentEndpoint/parent-id/endpoint/1');
  });

  it('._get', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_get']('parent-id');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['parentEndpoint/parent-id/endpoint']);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._get fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_get']<{ key: string }>('parent-id', ['key']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['parentEndpoint/parent-id/endpoint?fields=key']);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._getByID', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_getByID']('parent-id', '1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['parentEndpoint/parent-id/endpoint/1']);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._getByID fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_getByID']<{ key: string; optional?: string }>('parent-id', '1', ['key', 'optional']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['parentEndpoint/parent-id/endpoint/1?fields=key,optional']);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._post', async () => {
    const { fetch, resource } = createClient();

    fetch.post.resolves(RESPONSE_DATA);

    const data = await resource['_post']('parent-id', { key: 'value' });

    expect(fetch.post.callCount).to.eql(1);
    expect(fetch.post.args[0]).to.eql(['parentEndpoint/parent-id/endpoint', { key: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._put', async () => {
    const { fetch, resource } = createClient();

    fetch.put.resolves(RESPONSE_DATA);

    const data = await resource['_put']('parent-id', '1', { key: 'value' });

    expect(fetch.put.callCount).to.eql(1);
    expect(fetch.put.args[0]).to.eql(['parentEndpoint/parent-id/endpoint/1', { key: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._patch', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.resolves(RESPONSE_DATA);

    const data = await resource['_patch']('parent-id', '1', { optional: 'value' });

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['parentEndpoint/parent-id/endpoint/1', { optional: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._delete', async () => {
    const { fetch, resource } = createClient();

    fetch.delete.resolves(RESPONSE_DATA);

    const data = await resource['_delete']('parent-id', '1');

    expect(fetch.delete.callCount).to.eql(1);
    expect(fetch.delete.args[0]).to.eql(['parentEndpoint/parent-id/endpoint/1']);
    expect(data).to.eql('1');
  });
});
