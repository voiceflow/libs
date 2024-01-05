/* eslint-disable dot-notation */
import Crud from './crud';
import VariableState from './variableState';

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

  const resource = new VariableState(fetch as any);

  return {
    crud,
    fetch,
    resource,
  };
};

describe('VariableStateResource', () => {
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
});
