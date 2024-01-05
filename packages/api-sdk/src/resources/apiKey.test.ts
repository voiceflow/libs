/* eslint-disable dot-notation */
import APIKey from './apiKey';
import Crud from './crud';

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

  const resource = new APIKey(fetch as any);

  Crud.prototype['_get'] = crud.get;
  Crud.prototype['_getByID'] = crud.getByID;
  Crud.prototype['_post'] = crud.post;
  Crud.prototype['_put'] = crud.put;
  Crud.prototype['_patch'] = crud.patch;
  Crud.prototype['_delete'] = crud.delete;

  return {
    crud,
    fetch,
    resource,
  };
};

describe('ApiKeyResource', () => {
  it('.get', async () => {
    const { crud, resource } = createClient();

    crud.getByID.mockResolvedValue(RESPONSE_DATA);

    const data = await resource.get('1');

    expect(crud.getByID).toHaveBeenCalledTimes(1);
    expect(crud.getByID).toHaveBeenCalledWith('1');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.mockResolvedValue(RESPONSE_DATA);

    const body = {
      _id: '1',
      creatorID: 1,
      projectID: '1',

      name: 'name',
      variables: [],
      platformData: {
        slots: [],
        intents: [],
        settings: {},
        publishing: {},
      },
      rootDiagramID: '1',
    };

    const data = await resource.create('1', body);

    expect(crud.post).toHaveBeenCalledTimes(1);
    expect(crud.post).toHaveBeenCalledWith({ ...body, workspaceID: '1' });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.put.mockResolvedValue(RESPONSE_DATA);

    const body = {
      name: 'new name',
      variables: ['aaaa'],
    };

    const data = await resource.update('1', body as any);

    expect(crud.put).toHaveBeenCalledTimes(1);
    expect(crud.put).toHaveBeenCalledWith('1', body);
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
});
