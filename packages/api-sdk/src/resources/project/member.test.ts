/* eslint-disable dot-notation */
import Member from './member';

const RESPONSE_DATA = { field1: '1', field2: { subfield: [1, 10] } };

const createClient = () => {
  const fetch = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
    granularPatch: jest.fn(),
  };

  const resource = new Member(fetch as any);

  return {
    fetch,
    resource,
  };
};

describe('MemberResource', () => {
  it('._getCRUDEndpoint', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']('1')).toBe('projects/1/members');
  });

  it('.list', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.list('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/members');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.list fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.list<{ creatorID: number }>('1', ['creatorID']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/members?fields=creatorID');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.get', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.get('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/member');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.get fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.get<{ creatorID: number }>('1', ['creatorID']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('projects/1/member?fields=creatorID');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { fetch, resource } = createClient();

    fetch.post.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.create('1', { platformData: {} });

    expect(fetch.post).toHaveBeenCalledTimes(1);
    expect(fetch.post).toHaveBeenCalledWith('projects/1/members', { platformData: {} });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { fetch, resource } = createClient();

    fetch.put.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.update('1', { platformData: {} });

    expect(fetch.put).toHaveBeenCalledTimes(1);
    expect(fetch.put).toHaveBeenCalledWith('projects/1/members', { platformData: {} });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.delete', async () => {
    const { fetch, resource } = createClient();

    fetch.delete.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.delete('1');

    expect(fetch.delete).toHaveBeenCalledTimes(1);
    expect(fetch.delete).toHaveBeenCalledWith('projects/1/members');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.platformDataCreate', async () => {
    const { fetch, resource } = createClient();

    fetch.granularPatch.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.platformDataAdd('1', 'platformData.vendors[$id]', { name: 'name' }, { id: '1' });

    expect(fetch.granularPatch).toHaveBeenCalledTimes(1);
    expect(fetch.granularPatch).toHaveBeenCalledWith(
      'projects/1/members/platform-data/add',
      'platformData.vendors[$id]',
      { name: 'name' },
      { id: '1' }
    );
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.platformDataUpdate', async () => {
    const { fetch, resource } = createClient();

    fetch.granularPatch.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.platformDataUpdate('1', 'platformData.vendors[$id].name', 'name', { id: '1' });

    expect(fetch.granularPatch).toHaveBeenCalledTimes(1);
    expect(fetch.granularPatch).toHaveBeenCalledWith('projects/1/members/platform-data/update', 'platformData.vendors[$id].name', 'name', {
      id: '1',
    });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.platformDataDelete', async () => {
    const { fetch, resource } = createClient();

    fetch.granularPatch.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.platformDataRemove('1', 'platformData.vendors[$id]', { id: '1' });

    expect(fetch.granularPatch).toHaveBeenCalledTimes(1);
    expect(fetch.granularPatch).toHaveBeenCalledWith('projects/1/members/platform-data/remove', 'platformData.vendors[$id]', undefined, { id: '1' });
    expect(data).toBe(RESPONSE_DATA);
  });
});
