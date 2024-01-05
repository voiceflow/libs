/* eslint-disable dot-notation */
import Crud from '../crud';
import Project from '.';

const RESPONSE_DATA = { field1: '1', field2: { subfield: [1, 10] } };

const createClient = () => {
  const fetch = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  };

  const crud = {
    get: jest.fn(),
    getByID: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  };

  Crud.prototype['_get'] = crud.get;
  Crud.prototype['_getByID'] = crud.getByID;
  Crud.prototype['_post'] = crud.post;
  Crud.prototype['_put'] = crud.put;
  Crud.prototype['_patch'] = crud.patch;
  Crud.prototype['_delete'] = crud.delete;

  const resource = new Project(fetch as any);

  return {
    crud,
    fetch,
    resource,
  };
};

describe('ProjectResource', () => {
  it('.get', async () => {
    const { crud, resource } = createClient();

    crud.getByID.mockResolvedValue(RESPONSE_DATA);

    const data = await resource.get('1');

    expect(crud.getByID).toHaveBeenCalledTimes(1);
    expect(crud.getByID).toHaveBeenCalledWith('1');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.get fields', async () => {
    const { crud, resource } = createClient();

    crud.getByID.mockResolvedValue(RESPONSE_DATA);

    const data = await resource.get<{ name: string }>('1', ['name']);

    expect(crud.getByID).toHaveBeenCalledTimes(1);
    expect(crud.getByID).toHaveBeenCalledWith('1', ['name']);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.list', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.list('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('workspaces/1/projects');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.list fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.list<{ platformData: Record<string, unknown> }>('1', ['platformData']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('workspaces/1/projects?fields=platformData');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.mockResolvedValue(RESPONSE_DATA);

    const body = {
      _id: '1',
      teamID: '1',
      creatorID: 1,

      name: 'name',
      members: [],
      platform: 'alexa',
      platformData: {},
    } as any;

    const data = await resource.create(body);

    expect(crud.post).toHaveBeenCalledTimes(1);
    expect(crud.post).toHaveBeenCalledWith(body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.patch.mockResolvedValue(RESPONSE_DATA);

    const body = {
      name: 'new  name',
    };

    const data = await resource.update('1', body);

    expect(crud.patch).toHaveBeenCalledTimes(1);
    expect(crud.patch).toHaveBeenCalledWith('1', body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.delete', async () => {
    const { crud, resource } = createClient();

    crud.delete.mockResolvedValue(RESPONSE_DATA);

    const data = await resource.delete('1');

    expect(crud.delete).toHaveBeenCalledTimes(1);
    expect(crud.delete).toHaveBeenCalledWith('1');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.updatePlatformData', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue({ data: RESPONSE_DATA });

    const body = {
      settings: {
        key: 'value',
      },
      publishing: {},
    };

    const data = await resource.updatePlatformData('1', body);

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('projects/1/platform', body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getVersions', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getVersions('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/versions');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getVersions fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getVersions<{ name: string; variables: string[] }>('1', ['name', 'variables']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/versions?fields=name,variables');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getVersionsV2', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getVersionsV2('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/projectVersions?offset=0&limit=10');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getVersionsV2 offset', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getVersionsV2('1', { offset: 2 });

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/projectVersions?offset=2&limit=10');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getVersionsV2 limit', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getVersionsV2('1', { limit: 5 });

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/projectVersions?offset=0&limit=5');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getPrototype', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getPrototype('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/prototype');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getCreator', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getCreator('1', 'version');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/creator/version');
    expect(data).toBe(RESPONSE_DATA);
  });
});
