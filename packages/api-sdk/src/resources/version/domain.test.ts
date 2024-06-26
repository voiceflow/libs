/* eslint-disable dot-notation */
import { describe, expect, it, vi } from 'vitest';

import CrudNested from '../crudNested';
import Domain from './domain';

const RESPONSE_DATA = { field1: '1', field2: { subfield: [1, 10] } };

const createClient = () => {
  const fetch = {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  };

  const crud = {
    get: vi.fn(),
    getByID: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  };

  CrudNested.prototype['_get'] = crud.get;
  CrudNested.prototype['_getByID'] = crud.getByID;
  CrudNested.prototype['_post'] = crud.post;
  CrudNested.prototype['_put'] = crud.put;
  CrudNested.prototype['_patch'] = crud.patch;
  CrudNested.prototype['_delete'] = crud.delete;

  const resource = new Domain(fetch as any, { parentEndpoint: 'parentEndpoint' });

  return {
    crud,
    fetch,
    resource,
  };
};

describe('DomainResource', () => {
  it('.list', async () => {
    const { crud, resource } = createClient();

    crud.get.mockResolvedValue(RESPONSE_DATA);

    const data = await resource.list('version-id');

    expect(crud.get).toHaveBeenCalledTimes(1);
    expect(crud.get).toHaveBeenCalledWith('version-id');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.get', async () => {
    const { crud, resource } = createClient();

    crud.getByID.mockResolvedValue(RESPONSE_DATA);

    const data = await resource.get('version-id', '1');

    expect(crud.getByID).toHaveBeenCalledTimes(1);
    expect(crud.getByID).toHaveBeenCalledWith('version-id', '1');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.mockResolvedValue(RESPONSE_DATA);

    const body = {
      id: '1',
      topicIDs: ['topic-id-1', 'topic-id-2'],
      rootDiagramID: 'diagram-id',
      name: 'name',
      live: true,
    };

    const data = await resource.create('version-id', body);

    expect(crud.post).toHaveBeenCalledTimes(1);
    expect(crud.post).toHaveBeenCalledWith('version-id', body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.patch.mockResolvedValue(RESPONSE_DATA);

    const body = {
      name: 'new',
    };

    const data = await resource.update('version-id', '1', body);

    expect(crud.patch).toHaveBeenCalledTimes(1);
    expect(crud.patch).toHaveBeenCalledWith('version-id', '1', body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.delete', async () => {
    const { crud, resource } = createClient();

    crud.delete.mockResolvedValue(RESPONSE_DATA);

    const data = await resource.delete('version-id', '1');

    expect(crud.delete).toHaveBeenCalledTimes(1);
    expect(crud.delete).toHaveBeenCalledWith('version-id', '1');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.topicAdd', async () => {
    const { fetch, resource } = createClient();

    fetch.post.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.topicAdd('version-id', '1', 'topic');

    expect(fetch.post).toHaveBeenCalledTimes(1);
    expect(fetch.post).toHaveBeenCalledWith('parentEndpoint/version-id/domains/1/topics', { topicID: 'topic' });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.topicRemove', async () => {
    const { fetch, resource } = createClient();

    fetch.delete.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.topicRemove('version-id', '1', 'topic');

    expect(fetch.delete).toHaveBeenCalledTimes(1);
    expect(fetch.delete).toHaveBeenCalledWith('parentEndpoint/version-id/domains/1/topics/topic');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.topicReorder', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.topicReorder('version-id', '1', 'fromID', { toIndex: 3 });

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('parentEndpoint/version-id/domains/1/topics/fromID/reorder', {
      toIndex: 3,
    });
    expect(data).toBe(RESPONSE_DATA);
  });
});
