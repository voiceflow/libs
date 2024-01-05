/* eslint-disable dot-notation */
import Crud from './crud';
import Program from './program';

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

  const resource = new Program(fetch as any);

  return {
    crud,
    fetch,
    resource,
  };
};

describe('ProgramResource', () => {
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

    const data = await resource.get<{ id: string; startID: string }>('1', ['id', 'startID']);

    expect(crud.getByID).toHaveBeenCalledTimes(1);
    expect(crud.getByID).toHaveBeenCalledWith('1', ['id', 'startID']);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.mockResolvedValue(RESPONSE_DATA);

    const body = {
      id: '1',
      startId: '1',
      versionID: '1',
      diagramID: 'diagram-id',

      lines: {
        1: { id: '1', type: 'type' },
      },
      commands: [],
      variables: [],
    };

    const data = await resource.create(body);

    expect(crud.post).toHaveBeenCalledTimes(1);
    expect(crud.post).toHaveBeenCalledWith(body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.createMany', async () => {
    const { fetch, resource } = createClient();

    fetch.post.mockResolvedValue({ data: RESPONSE_DATA });

    const body = [
      {
        id: '1',
        startId: '1',
        versionID: '1',
        diagramID: 'diagram-id',

        lines: {
          1: { id: '1', type: 'type' },
        },
        commands: [],
        variables: [],
      },
      {
        id: '2',
        startId: '2',
        versionID: '2',
        diagramID: 'diagram-id',

        lines: {
          2: { id: '2', type: 'type' },
        },
        commands: [],
        variables: [],
      },
    ];

    const data = await resource.createMany(body);

    expect(fetch.post).toHaveBeenCalledTimes(1);
    expect(fetch.post).toHaveBeenCalledWith('programs/batch', { programs: body });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.put.mockResolvedValue(RESPONSE_DATA);

    const body = {
      startId: '1',
      versionID: '1',
      diagramID: 'diagram-id',

      lines: {
        1: { id: '1', type: 'type' },
      },
      commands: [
        {
          type: '1',
          diagram_id: '1',
          intent: 'intent',
          mappings: [],
        },
      ],
      variables: ['var1'],
    };

    const data = await resource.update('1', body);

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
    expect(data).toEqual(RESPONSE_DATA);
  });
});
