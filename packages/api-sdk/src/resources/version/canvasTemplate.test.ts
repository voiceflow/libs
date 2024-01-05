/* eslint-disable dot-notation */
import CrudNested from '../crudNested';
import CanvasTemplate from './canvasTemplate';

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

  CrudNested.prototype['_get'] = crud.get;
  CrudNested.prototype['_getByID'] = crud.getByID;
  CrudNested.prototype['_post'] = crud.post;
  CrudNested.prototype['_put'] = crud.put;
  CrudNested.prototype['_patch'] = crud.patch;
  CrudNested.prototype['_delete'] = crud.delete;

  const resource = new CanvasTemplate(fetch as any, { parentEndpoint: 'parentEndpoint' });

  return {
    crud,
    fetch,
    resource,
  };
};

describe('CanvasTemplateResource', () => {
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
      id: '123',
      name: 'name',
      color: '#ff0000',
      nodeIDs: [],
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
});
