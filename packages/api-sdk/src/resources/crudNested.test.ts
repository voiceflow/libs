/* eslint-disable dot-notation */
import type { AnyRecord } from '@voiceflow/common';
import { describe, expect, it, vi } from 'vitest';

import CrudNestedResource from './crudNested';

const RESPONSE_DATA = {
  data: { field1: '1', field2: { subfield: [1, 10] } },
  status: 200,
};

const createClient = () => {
  const fetch = {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  };

  const resource = new CrudNestedResource<
    string,
    { id: string; key: string; optional?: string },
    'id',
    AnyRecord,
    'id'
  >({
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
  it('._getCRUDEndpoint', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']('parent-id')).toBe('parentEndpoint/parent-id/endpoint');
  });

  it('._getCRUDEndpoint with id', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']('parent-id', '1')).toBe('parentEndpoint/parent-id/endpoint/1');
  });

  it('._get', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_get']('parent-id');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('parentEndpoint/parent-id/endpoint');
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._get fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_get']<{ key: string }>('parent-id', ['key']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('parentEndpoint/parent-id/endpoint?fields=key');
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._getByID', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_getByID']('parent-id', '1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('parentEndpoint/parent-id/endpoint/1');
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._getByID fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_getByID']<{ key: string; optional?: string }>('parent-id', '1', ['key', 'optional']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('parentEndpoint/parent-id/endpoint/1?fields=key,optional');
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._post', async () => {
    const { fetch, resource } = createClient();

    fetch.post.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_post']('parent-id', { key: 'value' });

    expect(fetch.post).toHaveBeenCalledTimes(1);
    expect(fetch.post).toHaveBeenCalledWith('parentEndpoint/parent-id/endpoint', { key: 'value' });
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._put', async () => {
    const { fetch, resource } = createClient();

    fetch.put.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_put']('parent-id', '1', { key: 'value' });

    expect(fetch.put).toHaveBeenCalledTimes(1);
    expect(fetch.put).toHaveBeenCalledWith('parentEndpoint/parent-id/endpoint/1', { key: 'value' });
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._patch', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_patch']('parent-id', '1', { optional: 'value' });

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('parentEndpoint/parent-id/endpoint/1', { optional: 'value' });
    expect(data).toBe(RESPONSE_DATA.data);
  });

  it('._delete', async () => {
    const { fetch, resource } = createClient();

    fetch.delete.mockResolvedValue(RESPONSE_DATA);

    const data = await resource['_delete']('parent-id', '1');

    expect(fetch.delete).toHaveBeenCalledTimes(1);
    expect(fetch.delete).toHaveBeenCalledWith('parentEndpoint/parent-id/endpoint/1');
    expect(data).toBe('1');
  });
});
