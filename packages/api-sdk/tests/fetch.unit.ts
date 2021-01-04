/* eslint-disable dot-notation */

import baseAxios from 'axios';
import { expect } from 'chai';
import sinon from 'sinon';

import Fetch, { FetchConfig } from '@/fetch';

const CLIENT_KEY = '123qwe123';
const AUTHORIZATION = 'qwe123qwe';
const RESPONSE_DATA = {
  data: { field1: '1', field2: { subfield: [1, 10] } },
  status: 200,
};

const createFetch = (apiEndpoint = '', { options, authorization = 'qwe123qwe' }: { options?: FetchConfig; authorization?: string | null } = {}) => {
  const axiosInstance = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
    defaults: {},
  };

  const axiosCreate = sinon.stub(baseAxios, 'create').returns(axiosInstance as any);

  const fetch = new Fetch({
    options,
    clientKey: '123qwe123',
    apiEndpoint,
    authorization: authorization === null ? undefined : authorization,
  });

  return { fetch, axiosCreate, axiosInstance };
};

describe('Fetch', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('.constructor', () => {
    const { axiosCreate } = createFetch('https://example.com');

    expect(axiosCreate.callCount).to.eql(1);
    expect(axiosCreate.args[0]).to.eql([
      {
        baseURL: 'https://example.com/',
        headers: {
          clientKey: CLIENT_KEY,
          authorization: AUTHORIZATION,
        },
        withCredentials: true,
      },
    ]);
  });

  it('.constructor with trailing slash', () => {
    const { axiosCreate } = createFetch('https://example.com/');

    expect(axiosCreate.callCount).to.eql(1);
    expect(axiosCreate.args[0]).to.eql([
      {
        baseURL: 'https://example.com/',
        headers: {
          clientKey: CLIENT_KEY,
          authorization: AUTHORIZATION,
        },
        withCredentials: true,
      },
    ]);
  });

  it('.constructor with globalHeaders', () => {
    const { axiosCreate } = createFetch('https://example.com', { options: { headers: { key: 'val' } } });

    expect(axiosCreate.callCount).to.eql(1);
    expect(axiosCreate.args[0]).to.eql([
      {
        baseURL: 'https://example.com/',
        headers: {
          key: 'val',
          clientKey: CLIENT_KEY,
          authorization: AUTHORIZATION,
        },
        withCredentials: true,
      },
    ]);
  });

  it('.constructor without authorization', () => {
    const { axiosCreate } = createFetch('https://example.com', { authorization: null });

    expect(axiosCreate.callCount).to.eql(1);
    expect(axiosCreate.args[0]).to.eql([
      {
        baseURL: 'https://example.com/',
        headers: { clientKey: CLIENT_KEY },
        withCredentials: true,
      },
    ]);
  });

  it('.get', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.get.resolves(RESPONSE_DATA);

    const data = await fetch.get('get');

    expect(axiosInstance.get.callCount).to.eql(1);
    expect(axiosInstance.get.args[0]).to.eql(['get']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.post', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.post.resolves(RESPONSE_DATA);

    const data = await fetch.post('post', { name: 'Name', id: 'id' });

    expect(axiosInstance.post.callCount).to.eql(1);
    expect(axiosInstance.post.args[0]).to.eql(['post', { name: 'Name', id: 'id' }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.put', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.put.resolves(RESPONSE_DATA);

    const data = await fetch.put('put', { name: 'Name', id: 'id' });

    expect(axiosInstance.put.callCount).to.eql(1);
    expect(axiosInstance.put.args[0]).to.eql(['put', { name: 'Name', id: 'id' }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.patch', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.patch.resolves(RESPONSE_DATA);

    const data = await fetch.patch('patch', { name: 'New Name' });

    expect(axiosInstance.patch.callCount).to.eql(1);
    expect(axiosInstance.patch.args[0]).to.eql(['patch', { name: 'New Name' }, undefined]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.patch with query', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.patch.resolves(RESPONSE_DATA);

    const data = await fetch.patch('patch', { name: 'New Name' }, { key: '1' });

    expect(axiosInstance.patch.callCount).to.eql(1);
    expect(axiosInstance.patch.args[0]).to.eql(['patch', { name: 'New Name' }, { params: { key: '1' } }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.delete', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.delete.resolves(RESPONSE_DATA);

    const data = await fetch.delete('delete');

    expect(axiosInstance.delete.callCount).to.eql(1);
    expect(axiosInstance.delete.args[0]).to.eql(['delete']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.granularPatch', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.patch.resolves(RESPONSE_DATA);

    const data = await fetch.granularPatch('patch', 'path.[$var].nested', [1, 2], { var: 20 });

    expect(axiosInstance.patch.callCount).to.eql(1);
    expect(axiosInstance.patch.args[0]).to.eql(['patch', { value: [1, 2], path: 'path.[$var].nested', pathVariables: { var: 20 } }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.initWithOptions', async () => {
    const { fetch, axiosCreate } = createFetch('https://example.com', { options: { headers: { key: 'val' } } });

    Object.assign(fetch['axios'], {
      defaults: {
        baseURL: 'https://example.com/',
        headers: {
          key: 'val',
          clientKey: CLIENT_KEY,
          authorization: AUTHORIZATION,
        },
      },
    });

    const fetch2 = fetch.initWithOptions({ headers: { key2: 'val2' } });

    expect(fetch2).to.be.instanceOf(Fetch);
    expect(axiosCreate.callCount).to.eql(2);
    expect(axiosCreate.args[1]).to.eql([
      {
        baseURL: 'https://example.com/',
        headers: {
          key: 'val',
          key2: 'val2',
          clientKey: CLIENT_KEY,
          authorization: AUTHORIZATION,
        },
        withCredentials: true,
      },
    ]);
  });

  it('.setOptions', async () => {
    const { fetch } = createFetch('https://example.com', { options: { headers: { key: 'val' } } });

    Object.assign(fetch['axios'], {
      defaults: {
        baseURL: 'https://example.com/',
        headers: {
          key: 'val',
          clientKey: CLIENT_KEY,
          authorization: AUTHORIZATION,
        },
      },
    });

    fetch.setOptions({ headers: { key2: 'val2' } });

    expect(fetch['axios'].defaults).to.eql({
      baseURL: 'https://example.com/',
      headers: {
        key: 'val',
        key2: 'val2',
        clientKey: CLIENT_KEY,
        authorization: AUTHORIZATION,
      },
    });
  });
});
