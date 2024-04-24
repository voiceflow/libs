/* eslint-disable dot-notation */

import { describe, expect, it, vi } from 'vitest';

import BaseResource from './base';

const createClient = () => {
  const fetch = {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
    initWithOptions: vi.fn(),
  };

  class Resource {}

  const resource = new BaseResource<Resource>({
    fetch: fetch as any,
    clazz: Resource,
    endpoint: 'endpoint',
  });

  return {
    fetch,
    resource,
    Resource,
  };
};

describe('BaseResource', () => {
  it('.constructor', () => {
    const { fetch, resource, Resource } = createClient();

    expect(resource['fetch']).toBe(fetch);
    expect(resource['clazz']).toBe(Resource);
    expect(resource['endpoint']).toBe('endpoint');
  });

  it('.options', () => {
    const { fetch, resource, Resource } = createClient();

    const instance = resource.options({
      headers: { key: 'val' },
    });

    expect(instance).toBeInstanceOf(Resource);
    expect(fetch.initWithOptions).toHaveBeenCalledWith({
      headers: { key: 'val' },
    });
  });

  it('._getFieldsQuery', () => {
    const { resource } = createClient();

    expect(resource['_getFieldsQuery']()).toBe('');
    expect(resource['_getFieldsQuery'](['name'])).toBe('?fields=name');
  });

  it('._getIDsQuery', () => {
    const { resource } = createClient();

    expect(resource['_getIDsQuery']('name', [])).toBe('');
    expect(resource['_getIDsQuery']('name', ['1', '2'])).toBe('?name=1&name=2');
  });
});
