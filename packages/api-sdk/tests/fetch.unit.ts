import baseAxios from 'axios';
import { expect } from 'chai';
import sinon from 'sinon';

import Fetch from '@/fetch';

const CLIENT_KEY = '123qwe123';
const AUTHORIZATION = 'qwe123qwe';
const RESPONSE_DATA = {
  data: { field1: '1', field2: { subfield: [1, 10] } },
  status: 200,
};

const createFetch = (apiEndpoint = '') => {
  const axiosInstance = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
  };

  const axiosCreate = sinon.stub(baseAxios, 'create').returns(axiosInstance as any);

  const fetch = new Fetch({
    clientKey: '123qwe123',
    apiEndpoint,
    authorization: 'qwe123qwe',
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
    expect(axiosInstance.patch.args[0]).to.eql(['patch', { name: 'New Name' }]);
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
});
