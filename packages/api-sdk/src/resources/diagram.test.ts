/* eslint-disable dot-notation */
import Crud from './crud';
import Diagram from './diagram';

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

  const resource = new Diagram(fetch as any);

  return {
    crud,
    fetch,
    resource,
  };
};

describe('DiagramResource', () => {
  it('.getRTC', async () => {
    const { fetch, resource } = createClient();

    const response = { diagram: { name: 'diagram name' }, timestamp: 12345 };
    fetch.get.mockResolvedValue({ data: response });

    const data = await resource.getRTC('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('diagrams/1/rtc');
    expect(data).toBe(response);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.mockResolvedValue(RESPONSE_DATA);

    const body = {
      name: 'name',
      versionID: '12',
      creatorID: 12,
      variables: [],

      offsetX: 0,
      offsetY: 0,
      zoom: 1,
      nodes: {
        1: { nodeID: '1', type: 'type', data: {} },
        2: { nodeID: '2', type: 'type', data: {} },
      },
    };

    const data = await resource.create(body);

    expect(crud.post).toHaveBeenCalledTimes(1);
    expect(crud.post).toHaveBeenCalledWith(body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.patch.mockResolvedValue(RESPONSE_DATA);

    const body = {
      name: 'name 2',
      versionID: '12',

      offsetX: 2,
      offsetY: 2,
      zoom: 1,
      nodes: {
        1: { nodeID: '1', type: 'type', data: {} },
        2: { nodeID: '2', type: 'type', data: {} },
      },
    };

    const data = await resource.update('1', body);

    expect(crud.patch).toHaveBeenCalledTimes(1);
    expect(crud.patch).toHaveBeenCalledWith('1', body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.updateNode', async () => {
    const { fetch, resource } = createClient();

    fetch.put.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.updateNode('1', '2', { type: 'type', data: { key: 'value' } });

    expect(fetch.put).toHaveBeenCalledTimes(1);
    expect(fetch.put).toHaveBeenCalledWith('diagrams/1/nodes/2', { type: 'type', data: { key: 'value' } });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.patchNode', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.patchNode('1', '2', { type: 'type' });

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('diagrams/1/nodes/2', { type: 'type' });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.deleteNode', async () => {
    const { fetch, resource } = createClient();

    fetch.delete.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.deleteNode('1', '2');

    expect(fetch.delete).toHaveBeenCalledTimes(1);
    expect(fetch.delete).toHaveBeenCalledWith('diagrams/1/nodes/2');
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

  it('.deleteMany', async () => {
    const { fetch, resource } = createClient();

    const data = await resource.deleteMany(['1', '2']);

    expect(fetch.post).toHaveBeenCalledTimes(1);
    expect(fetch.post).toHaveBeenCalledWith('diagrams/remove-many', { ids: ['1', '2'] });
    expect(data).toEqual(['1', '2']);
  });
});
