/* eslint-disable dot-notation */
import Crud from '../crud';
import Version from '.';

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

  const resource = new Version(fetch as any);

  return {
    crud,
    fetch,
    resource,
  };
};

describe('VersionResource', () => {
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
      manualSave: true,
      autoSaveFromRestore: false,
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
      name: 'new name',
      variables: ['aaaa'],
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
    expect(fetch.patch).toHaveBeenCalledWith('versions/1/platform', body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.updateDefaultStepColors', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue({ data: RESPONSE_DATA });

    const body = {
      carousel: 'red',
    };

    const data = await resource.updateDefaultStepColors('1', body);

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('versions/1/defaultStepColors', body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.updatePlatformDataSettings', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue({ data: RESPONSE_DATA });

    const body = { key: 'value' };

    const data = await resource.updatePlatformDataSettings('1', body);

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('versions/1/platform', body, { path: 'settings' });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.updatePlatformDataPublishing', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue({ data: RESPONSE_DATA });

    const body = { key: 'value' };

    const data = await resource.updatePlatformDataPublishing('1', body);

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('versions/1/platform', body, { path: 'publishing' });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getPrograms', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getPrograms('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/programs');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getPrograms fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getPrograms<{ id: string; variables: string[] }>('1', ['id', 'variables']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/programs?fields=id,variables');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getPrototypePrograms', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getPrototypePrograms('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/prototype-programs');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getPrototypePrograms fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getPrototypePrograms<{ id: string; variables: string[] }>('1', ['id', 'variables']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/prototype-programs?fields=id,variables');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getDiagrams', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getDiagrams('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/diagrams');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getDiagrams fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getDiagrams<{ _id: string; name: string }>('1', ['_id', 'name']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/diagrams?fields=_id,name');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getDiagramsByIDs', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getDiagramsByIDs('id', ['1', '2']);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/id/diagrams?diagramID=1&diagramID=2');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.getLiveDiagramIDs', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.getLiveDiagramIDs('id');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/id/live-diagram-ids');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.export', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.export('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/export');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.export programs', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.export('1', { programs: true });

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/export?programs=1');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.exportResponses', async () => {
    const { fetch, resource } = createClient();

    fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.exportResponses('1');

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith('versions/1/export/responses');
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.import', async () => {
    const { fetch, resource } = createClient();

    fetch.post.mockResolvedValue({ data: RESPONSE_DATA });

    const data = await resource.import('workspace', '1' as any);

    expect(fetch.post).toHaveBeenCalledTimes(1);
    expect(fetch.post).toHaveBeenCalledWith('versions/import', { workspaceID: 'workspace', data: '1' });
    expect(data).toBe(RESPONSE_DATA);
  });

  describe('.getPrototype', () => {
    it('returns correctly', async () => {
      const { fetch, resource } = createClient();

      fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

      const data = await resource.getPrototype('1');

      expect(fetch.get).toHaveBeenCalledTimes(1);
      expect(fetch.get).toHaveBeenCalledWith('versions/1/prototype');
      expect(data).toBe(RESPONSE_DATA);
    });

    it('attaches isPublic query parameter', async () => {
      const { fetch, resource } = createClient();

      fetch.get.mockResolvedValue({ data: RESPONSE_DATA });

      await resource.getPrototype('1', { isPublic: true });

      expect(fetch.get).toHaveBeenCalledTimes(1);
      expect(fetch.get).toHaveBeenCalledWith('versions/1/prototype?isPublic=true');
    });
  });

  it('.updatePrototype', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue({ data: RESPONSE_DATA });

    const body = {
      settings: {
        layout: 'value',
      },
    };

    const data = await resource.updatePrototype('1', body);

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('versions/1/prototype', body);
    expect(data).toBe(RESPONSE_DATA);
  });

  it('.updatePrototypeSettings', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.mockResolvedValue({ data: RESPONSE_DATA });

    const body = { layout: 'value' };

    const data = await resource.updatePrototypeSettings('1', body);

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith('versions/1/prototype', body, { path: 'settings' });
    expect(data).toBe(RESPONSE_DATA);
  });

  it('checkPrototypeSharedLogin', async () => {
    const { fetch, resource } = createClient();

    const response = { data: 'dummy' };

    fetch.put.mockResolvedValue(response);

    const body = { password: 'some-password' };
    const versionID = '1';

    const data = await resource.checkPrototypeSharedLogin(versionID, body);

    expect(fetch.put).toHaveBeenCalledTimes(1);
    expect(fetch.put).toHaveBeenCalledWith('versions/1/prototype/share/login', body);
    expect(data).toBe(response.data);
  });

  it('getPrototypePlan', async () => {
    const { fetch, resource } = createClient();

    const response = { data: 'dummy' };

    fetch.get.mockResolvedValue(response);

    const versionID = '1';

    const data = await resource.getPrototypePlan(versionID);

    expect(fetch.get).toHaveBeenCalledTimes(1);
    expect(fetch.get).toHaveBeenCalledWith(`versions/${versionID}/prototype/plan`);
    expect(data).toBe(response.data);
  });

  it('reorderTopics', async () => {
    const { fetch, resource } = createClient();

    const fromID = 'fromID-1';
    const toIndex = 1;

    const response = { data: { sourceID: 'fromID-1' } };

    fetch.patch.mockResolvedValue(response);

    const versionID = '1';

    const data = await resource.reorderTopics(versionID, { fromID, toIndex });

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith(`versions/${versionID}/topics/reorder`, { fromID, toIndex });
    expect(data).toBe(response.data);
  });

  it('reorderComponents', async () => {
    const { fetch, resource } = createClient();

    const fromID = 'fromID-1';
    const toIndex = 1;

    const response = { data: { sourceID: 'fromID-1' } };

    fetch.patch.mockResolvedValue(response);

    const versionID = '1';

    const data = await resource.reorderComponents(versionID, { fromID, toIndex });

    expect(fetch.patch).toHaveBeenCalledTimes(1);
    expect(fetch.patch).toHaveBeenCalledWith(`versions/${versionID}/components/reorder`, { fromID, toIndex });
    expect(data).toBe(response.data);
  });
});
