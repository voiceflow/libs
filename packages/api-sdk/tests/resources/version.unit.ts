/* eslint-disable dot-notation */
import { Version } from '@api-sdk/resources';
import Crud from '@api-sdk/resources/crud';
import { expect } from 'chai';
import sinon from 'sinon';

const RESPONSE_DATA = { field1: '1', field2: { subfield: [1, 10] } };

const createClient = () => {
  const fetch = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
  };

  const crud = {
    get: sinon.stub(),
    getByID: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
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
  afterEach(() => {
    sinon.restore();
  });

  it('.get', async () => {
    const { crud, resource } = createClient();

    crud.getByID.resolves(RESPONSE_DATA);

    const data = await resource.get('1');

    expect(crud.getByID.callCount).to.eql(1);
    expect(crud.getByID.args[0]).to.eql(['1']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.get fields', async () => {
    const { crud, resource } = createClient();

    crud.getByID.resolves(RESPONSE_DATA);

    const data = await resource.get<{ name: string }>('1', ['name']);

    expect(crud.getByID.callCount).to.eql(1);
    expect(crud.getByID.args[0]).to.eql(['1', ['name']]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.resolves(RESPONSE_DATA);

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

    const data = await resource.create(body);

    expect(crud.post.callCount).to.eql(1);
    expect(crud.post.args[0]).to.eql([body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.patch.resolves(RESPONSE_DATA);

    const body = {
      name: 'new name',
      variables: ['aaaa'],
    };

    const data = await resource.update('1', body);

    expect(crud.patch.callCount).to.eql(1);
    expect(crud.patch.args[0]).to.eql(['1', body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.delete', async () => {
    const { crud, resource } = createClient();

    crud.delete.resolves(RESPONSE_DATA);

    const data = await resource.delete('1');

    expect(crud.delete.callCount).to.eql(1);
    expect(crud.delete.args[0]).to.eql(['1']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.updatePlatformData', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.resolves({ data: RESPONSE_DATA });

    const body = {
      settings: {
        key: 'value',
      },
      publishing: {},
    };

    const data = await resource.updatePlatformData('1', body);

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['versions/1/platform', body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.updatePlatformDataSettings', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.resolves({ data: RESPONSE_DATA });

    const body = { key: 'value' };

    const data = await resource.updatePlatformDataSettings('1', body);

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['versions/1/platform', body, { path: 'settings' }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.updatePlatformDataPublishing', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.resolves({ data: RESPONSE_DATA });

    const body = { key: 'value' };

    const data = await resource.updatePlatformDataPublishing('1', body);

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['versions/1/platform', body, { path: 'publishing' }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.getPrograms', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getPrograms('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/programs']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.getPrograms fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getPrograms<{ id: string; variables: string[] }>('1', ['id', 'variables']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/programs?fields=id,variables']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.getPrototypePrograms', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getPrototypePrograms('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/prototype-programs']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.getPrototypePrograms fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getPrototypePrograms<{ id: string; variables: string[] }>('1', ['id', 'variables']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/prototype-programs?fields=id,variables']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.getDiagrams', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getDiagrams('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/diagrams']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.getDiagrams fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getDiagrams<{ _id: string; name: string }>('1', ['_id', 'name']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/diagrams?fields=_id,name']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.export', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.export('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/export']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.export programs', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.export('1', { programs: true });

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/export?programs=1']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.exportResponses', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.exportResponses('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['versions/1/export/responses']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.import', async () => {
    const { fetch, resource } = createClient();

    fetch.post.resolves({ data: RESPONSE_DATA });

    const data = await resource.import('workspace', '1' as any);

    expect(fetch.post.callCount).to.eql(1);
    expect(fetch.post.args[0]).to.eql(['versions/import', { workspaceID: 'workspace', data: '1' }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  describe('.getPrototype', async () => {
    it('returns correctly', async () => {
      const { fetch, resource } = createClient();

      fetch.get.resolves({ data: RESPONSE_DATA });

      const data = await resource.getPrototype('1');

      expect(fetch.get.callCount).to.eql(1);
      expect(fetch.get.args[0]).to.eql(['versions/1/prototype']);
      expect(data).to.eql(RESPONSE_DATA);
    });

    it('attaches isPublic query parameter', async () => {
      const { fetch, resource } = createClient();

      fetch.get.resolves({ data: RESPONSE_DATA });

      await resource.getPrototype('1', { isPublic: true });

      expect(fetch.get.callCount).to.eql(1);
      expect(fetch.get.args[0]).to.eql(['versions/1/prototype?isPublic=true']);
    });
  });

  it('.updatePrototype', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.resolves({ data: RESPONSE_DATA });

    const body = {
      settings: {
        layout: 'value',
      },
    };

    const data = await resource.updatePrototype('1', body);

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['versions/1/prototype', body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.updatePrototypeSettings', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.resolves({ data: RESPONSE_DATA });

    const body = { layout: 'value' };

    const data = await resource.updatePrototypeSettings('1', body);

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['versions/1/prototype', body, { path: 'settings' }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('checkPrototypeSharedLogin', async () => {
    const { fetch, resource } = createClient();

    const response = { data: 'dummy' };

    fetch.put.resolves(response);

    const body = { password: 'some-password' };
    const versionID = '1';

    const data = await resource.checkPrototypeSharedLogin(versionID, body);

    expect(fetch.put.callCount).to.eql(1);
    expect(fetch.put.args[0]).to.eql(['versions/1/prototype/share/login', body]);
    expect(data).to.eql(response.data);
  });

  it('getPrototypePlan', async () => {
    const { fetch, resource } = createClient();

    const response = { data: 'dummy' };

    fetch.get.resolves(response);

    const versionID = '1';

    const data = await resource.getPrototypePlan(versionID);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql([`versions/${versionID}/prototype/plan`]);
    expect(data).to.eql(response.data);
  });
});
