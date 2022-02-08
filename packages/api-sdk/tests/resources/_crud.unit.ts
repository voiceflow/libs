/* eslint-disable dot-notation */

import CrudResource from '@api-sdk/resources/crud';
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

  const resource = new CrudResource<{ id: string; key: string; optional?: string }, 'id', any, 'id'>({
    clazz: class {},
    fetch: fetch as any,
    endpoint: 'endpoint',
    modelIDKey: 'id',
  });

  return {
    fetch,
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
    const { fetch, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_getByID']('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['endpoint/1']);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._getByID fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves(RESPONSE_DATA);

    const data = await resource['_getByID']<{ key: string; optional?: string }>('1', ['key', 'optional']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['endpoint/1?fields=key,optional']);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._post', async () => {
    const { fetch, resource } = createClient();

    fetch.post.resolves(RESPONSE_DATA);

    const data = await resource['_post']({ key: 'value' });

    expect(fetch.post.callCount).to.eql(1);
    expect(fetch.post.args[0]).to.eql(['endpoint', { key: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._put', async () => {
    const { fetch, resource } = createClient();

    fetch.put.resolves(RESPONSE_DATA);

    const data = await resource['_put']('1', { key: 'value' });

    expect(fetch.put.callCount).to.eql(1);
    expect(fetch.put.args[0]).to.eql(['endpoint/1', { key: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._patch', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.resolves(RESPONSE_DATA);

    const data = await resource['_patch']('1', { optional: 'value' });

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['endpoint/1', { optional: 'value' }]);
    expect(data).to.eql(RESPONSE_DATA.data);
  });

  it('._delete', async () => {
    const { fetch, resource } = createClient();

    fetch.delete.resolves(RESPONSE_DATA);

    const data = await resource['_delete']('1');

    expect(fetch.delete.callCount).to.eql(1);
    expect(fetch.delete.args[0]).to.eql(['endpoint/1']);
    expect(data).to.eql('1');
  });
});
