/* eslint-disable dot-notation */

import CrudResource from './crud';

const RESPONSE_DATA = {
  data: { field1: '1', field2: { subfield: [1, 10] } },
  status: 200,
};

const createClient = () => {
  const fetch = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  };

  const resource = new CrudResource<{ id: string; key: string; optional?: string }, 'id', any, 'id'>({
    clazz: class {},
    fetch: fetch as any,
    endpoint: 'endpoint',
  });

  return {
    fetch,
    resource,
  };
};

describe('CrudResource', () => {
  it('._getCRUDEndpoint', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']()).toBe('endpoint');
  });

  it('._getCRUDEndpoint with id', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']('1')).toBe('endpoint/1');
  });

  it('._get', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_get']();

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('endpoint');
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._get fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_get']<{ key: string }>(['key']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('endpoint?fields=key');
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._getByID', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_getByID']('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('endpoint/1');
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._getByID fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_getByID']<{ key: string; optional?: string }>('1', ['key', 'optional']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('endpoint/1?fields=key,optional');
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._post', async () => {
    const { fetch, resource } = createClient();

    fetch.post.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_post']({ key: 'value' });

    expect(fetch.post).toHaveBeenCalledTimes(1);
    expect(fetch.post).toHaveBeenCalledWith('endpoint', { key: 'value' });
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._put', async () => {
    const { fetch, resource } = createClient();

    fetch.put.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_put']('1', { key: 'value' });

    expect(fetch.put).toHaveBeenCalledTimes(1);
    expect(fetch.put).toHaveBeenCalledWith('endpoint/1', { key: 'value' });
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._patch', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_patch']('1', { optional: 'value' });

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('endpoint/1', { optional: 'value' });
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._delete', async () => {
    const { fetch, resource } = createClient();

    fetch.delete.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_delete']('1');

    expect(fetch.delete).toHaveBeenCalledTimes(1);
    expect(fetch.delete).toHaveBeenCalledWith('endpoint/1');
    expect(data).toBe('1');
  });
});
