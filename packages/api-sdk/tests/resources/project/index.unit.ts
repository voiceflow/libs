/* eslint-disable dot-notation */
import { expect } from 'chai';
import sinon from 'sinon';
import * as s from 'superstruct';

import { Project } from '@/resources';
import Crud from '@/resources/crud';

const RESPONSE_DATA = { field1: '1', field2: { subfield: [1, 10] } };

const createClient = () => {
  const assert = sinon.stub(s, 'assert');

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

  const resource = new Project(fetch as any);

  return {
    crud,
    fetch,
    assert,
    resource,
  };
};

describe('ProjectResource', () => {
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

  it('.list', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.list('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['workspaces/1/projects']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.list fields', async () => {
    const { fetch, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.list<{ platformData: Record<string, unknown> }>('1', ['platformData']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['workspaces/1/projects?fields=platformData']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.resolves(RESPONSE_DATA);

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

    expect(crud.post.callCount).to.eql(1);
    expect(crud.post.args[0]).to.eql([body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.patch.resolves(RESPONSE_DATA);

    const body = {
      name: 'new  name',
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
    const { fetch, assert, resource } = createClient();

    fetch.patch.resolves({ data: RESPONSE_DATA });

    const body = {
      settings: {
        key: 'value',
      },
      publishing: {},
    };

    const data = await resource.updatePlatformData('1', body);

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['projects/1/platform', body]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[0]).to.eql(['1', resource['struct'].schema._id]);
    expect(assert.args[1]).to.eql([{ settings: { key: 'value' }, publishing: {} }, resource['struct'].schema.platformData]);
  });

  it('.getVersions', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getVersions('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/versions']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', resource['struct'].schema._id]);
  });

  it('.getVersions fields', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getVersions<{ name: string; variables: string[] }>('1', ['name', 'variables']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/versions?fields=name,variables']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', resource['struct'].schema._id]);
  });

  it('.getPrototype', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getPrototype('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/prototype']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', resource['struct'].schema._id]);
  });
});
