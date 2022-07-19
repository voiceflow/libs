/* eslint-disable dot-notation */
import CrudNested from '@api-sdk/resources/crudNested';
import Domain from '@api-sdk/resources/version/domain';
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

  CrudNested.prototype['_get'] = crud.get;
  CrudNested.prototype['_getByID'] = crud.getByID;
  CrudNested.prototype['_post'] = crud.post;
  CrudNested.prototype['_put'] = crud.put;
  CrudNested.prototype['_patch'] = crud.patch;
  CrudNested.prototype['_delete'] = crud.delete;

  const resource = new Domain(fetch as any, { parentEndpoint: 'parentEndpoint' });

  return {
    crud,
    fetch,
    resource,
  };
};

describe('DomainResource', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('.list', async () => {
    const { crud, resource } = createClient();

    crud.get.resolves(RESPONSE_DATA);

    const data = await resource.list('version-id');

    expect(crud.get.callCount).to.eql(1);
    expect(crud.get.args[0]).to.eql(['version-id']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.get', async () => {
    const { crud, resource } = createClient();

    crud.getByID.resolves(RESPONSE_DATA);

    const data = await resource.get('version-id', '1');

    expect(crud.getByID.callCount).to.eql(1);
    expect(crud.getByID.args[0]).to.eql(['version-id', '1']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.resolves(RESPONSE_DATA);

    const body = {
      name: 'name',
      live: true,
    };

    const data = await resource.create('version-id', body);

    expect(crud.post.callCount).to.eql(1);
    expect(crud.post.args[0]).to.eql(['version-id', body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.patch.resolves(RESPONSE_DATA);

    const body = {
      name: 'new',
    };

    const data = await resource.update('version-id', '1', body);

    expect(crud.patch.callCount).to.eql(1);
    expect(crud.patch.args[0]).to.eql(['version-id', '1', body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.delete', async () => {
    const { crud, resource } = createClient();

    crud.delete.resolves(RESPONSE_DATA);

    const data = await resource.delete('version-id', '1');

    expect(crud.delete.callCount).to.eql(1);
    expect(crud.delete.args[0]).to.eql(['version-id', '1']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.topicAdd', async () => {
    const { fetch, resource } = createClient();

    fetch.post.resolves({ data: RESPONSE_DATA });

    const data = await resource.topicAdd('version-id', '1', 'topic');

    expect(fetch.post.callCount).to.eql(1);
    expect(fetch.post.args[0]).to.eql(['parentEndpoint/version-id/domains/1/topics', { topicID: 'topic' }]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.topicRemove', async () => {
    const { fetch, resource } = createClient();

    fetch.delete.resolves({ data: RESPONSE_DATA });

    const data = await resource.topicRemove('version-id', '1', 'topic');

    expect(fetch.delete.callCount).to.eql(1);
    expect(fetch.delete.args[0]).to.eql(['parentEndpoint/version-id/domains/1/topics/topic']);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.topicReorder', async () => {
    const { fetch, resource } = createClient();

    fetch.patch.resolves({ data: RESPONSE_DATA });

    const data = await resource.topicReorder('version-id', '1', 'fromID', { toIndex: 3 });

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['parentEndpoint/version-id/domains/1/topics/fromID/reorder', { toIndex: 3 }]);
    expect(data).to.eql(RESPONSE_DATA);
  });
});
