/* eslint-disable dot-notation */

import baseAxios from 'axios';

import Fetch, { FetchConfig } from './fetch';

const CLIENT_KEY = '123qwe123';
const AUTHORIZATION = 'qwe123qwe';
const RESPONSE_DATA = {
  data: { field1: '1', field2: { subfield: [1, 10] } },
  status: 200,
};

const createFetch = (apiEndpoint = '', { options, authorization = 'qwe123qwe' }: { options?: FetchConfig; authorization?: string | null } = {}) => {
  const axiosInstance = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
    defaults: {},
  };

  const axiosCreate = jest.spyOn(baseAxios, 'create').mockReturnValue(axiosInstance as any);

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
    jest.restoreAllMocks();
  });

  it('.constructor', () => {
    const { axiosCreate } = createFetch('https://example.com');

    expect(axiosCreate).toHaveBeenCalledTimes(1);
    expect(axiosCreate).toHaveBeenCalledWith({
      baseURL: 'https://example.com/',
      headers: {
        clientKey: CLIENT_KEY,
        authorization: AUTHORIZATION,
      },
      withCredentials: true,
    });
  });

  it('.constructor with trailing slash', () => {
    const { axiosCreate } = createFetch('https://example.com/');

    expect(axiosCreate).toHaveBeenCalledTimes(1);
    expect(axiosCreate).toHaveBeenCalledWith({
      baseURL: 'https://example.com/',
      headers: {
        clientKey: CLIENT_KEY,
        authorization: AUTHORIZATION,
      },
      withCredentials: true,
    });
  });

  it('.constructor with globalHeaders', () => {
    const { axiosCreate } = createFetch('https://example.com', { options: { headers: { key: 'val' } } });

    expect(axiosCreate).toHaveBeenCalledTimes(1);
    expect(axiosCreate).toHaveBeenCalledWith({
      baseURL: 'https://example.com/',
      headers: {
        key: 'val',
        clientKey: CLIENT_KEY,
        authorization: AUTHORIZATION,
      },
      withCredentials: true,
    });
  });

  it('.constructor without authorization', () => {
    const { axiosCreate } = createFetch('https://example.com', { authorization: null });

    expect(axiosCreate).toHaveBeenCalledTimes(1);
    expect(axiosCreate).toHaveBeenCalledWith({
      baseURL: 'https://example.com/',
      headers: { clientKey: CLIENT_KEY },
      withCredentials: true,
    });
  });

  it('.get', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.get.mockResolvedValue(RESPONSE_DATA);

    const data = await fetch.get('get');

    expect(axiosInstance.get).toHaveBeenCalledTimes(1);
    expect(axiosInstance.get).toHaveBeenCalledWith('get');
    expect(data).toEqual(RESPONSE_DATA);
  });

  it('.post', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.post.mockResolvedValue(RESPONSE_DATA);

    const data = await fetch.post('post', { name: 'Name', id: 'id' });

    expect(axiosInstance.post).toHaveBeenCalledTimes(1);
    expect(axiosInstance.post).toHaveBeenCalledWith('post', { name: 'Name', id: 'id' });
    expect(data).toEqual(RESPONSE_DATA);
  });

  it('.put', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.put.mockResolvedValue(RESPONSE_DATA);

    const data = await fetch.put('put', { name: 'Name', id: 'id' });

    expect(axiosInstance.put).toHaveBeenCalledTimes(1);
    expect(axiosInstance.put).toHaveBeenCalledWith('put', { name: 'Name', id: 'id' });
    expect(data).toEqual(RESPONSE_DATA);
  });

  it('.patch', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.patch.mockResolvedValue(RESPONSE_DATA);

    const data = await fetch.patch('patch', { name: 'New Name' });

    expect(axiosInstance.patch).toHaveBeenCalledTimes(1);
    expect(axiosInstance.patch).toHaveBeenCalledWith('patch', { name: 'New Name' }, undefined);
    expect(data).toEqual(RESPONSE_DATA);
  });

  it('.patch with query', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.patch.mockResolvedValue(RESPONSE_DATA);

    const data = await fetch.patch('patch', { name: 'New Name' }, { key: '1' });

    expect(axiosInstance.patch).toHaveBeenCalledTimes(1);
    expect(axiosInstance.patch).toHaveBeenCalledWith('patch', { name: 'New Name' }, { params: { key: '1' } });
    expect(data).toEqual(RESPONSE_DATA);
  });

  it('.delete', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.delete.mockResolvedValue(RESPONSE_DATA);

    const data = await fetch.delete('delete');

    expect(axiosInstance.delete).toHaveBeenCalledTimes(1);
    expect(axiosInstance.delete).toHaveBeenCalledWith('delete');
    expect(data).toEqual(RESPONSE_DATA);
  });

  it('.granularPatch', async () => {
    const { fetch, axiosInstance } = createFetch();

    axiosInstance.patch.mockResolvedValue(RESPONSE_DATA);

    const data = await fetch.granularPatch('patch', 'path.[$var].nested', [1, 2], { var: 20 });

    expect(axiosInstance.patch).toHaveBeenCalledTimes(1);
    expect(axiosInstance.patch).toHaveBeenCalledWith('patch', { value: [1, 2], path: 'path.[$var].nested', pathVariables: { var: 20 } });
    expect(data).toEqual(RESPONSE_DATA);
  });

  it('.initWithOptions', async () => {
    const { fetch, axiosCreate } = createFetch('https://example.com', { options: { headers: { key: 'val' } } });

    Object.assign(fetch['axios'], {
      defaults: {
        baseURL: 'https://example.com/',
        headers: {
          common: {
            key: 'val',
            clientKey: CLIENT_KEY,
            authorization: AUTHORIZATION,
          },
        },
      },
    });

    const fetch2 = fetch.initWithOptions({ headers: { key2: 'val2' } });

    expect(fetch2).toBeInstanceOf(Fetch);
    expect(axiosCreate).toHaveBeenCalledTimes(2);
    expect(axiosCreate).toHaveBeenCalledWith({
      baseURL: 'https://example.com/',
      headers: {
        key: 'val',
        key2: 'val2',
        clientKey: CLIENT_KEY,
        authorization: AUTHORIZATION,
      },
      withCredentials: true,
    });
  });

  it('.setOptions', async () => {
    const { fetch } = createFetch('https://example.com', { options: { headers: { key: 'val' } } });

    Object.assign(fetch['axios'], {
      defaults: {
        baseURL: 'https://example.com/',
        headers: {
          common: {
            key: 'val',
            clientKey: CLIENT_KEY,
            authorization: AUTHORIZATION,
          },
        },
      },
    });

    fetch.setOptions({ headers: { key2: 'val2' } });

    expect(fetch['axios'].defaults).toEqual({
      baseURL: 'https://example.com/',
      headers: {
        common: {
          key: 'val',
          key2: 'val2',
          clientKey: CLIENT_KEY,
          authorization: AUTHORIZATION,
        },
      },
    });
  });
});
