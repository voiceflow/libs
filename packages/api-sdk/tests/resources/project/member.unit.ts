/* eslint-disable dot-notation */
import { expect } from 'chai';
import sinon from 'sinon';
import * as s from 'superstruct';

import { SProjectID } from '@/models';
import Member from '@/resources/project/member';

const RESPONSE_DATA = { field1: '1', field2: { subfield: [1, 10] } };

const createClient = () => {
  const assert = sinon.stub(s, 'assert');

  const fetch = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
    granularPatch: sinon.stub(),
  };

  const resource = new Member(fetch as any);

  return {
    fetch,
    assert,
    resource,
  };
};

describe('MemberResource', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('._getCRUDEndpoint', () => {
    const { resource } = createClient();

    expect(resource['_getCRUDEndpoint']('1')).to.eql('projects/1/members');
  });

  it('.list', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.list('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/members']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.list fields', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.list<{ creatorID: number }>('1', ['creatorID']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/members?fields=creatorID']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.get', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.get('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/member']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.get fields', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.get<{ creatorID: number }>('1', ['creatorID']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/member?fields=creatorID']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.create', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.post.resolves({ data: RESPONSE_DATA });

    const data = await resource.create('1', { platformData: {} });

    expect(fetch.post.callCount).to.eql(1);
    expect(fetch.post.args[0]).to.eql(['projects/1/members', { platformData: {} }]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
    expect(assert.args[1]).to.eql([{ platformData: {} }, resource['putAndPostStruct']]);
  });

  it('.update', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.put.resolves({ data: RESPONSE_DATA });

    const data = await resource.update('1', { platformData: {} });

    expect(fetch.put.callCount).to.eql(1);
    expect(fetch.put.args[0]).to.eql(['projects/1/members', { platformData: {} }]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
    expect(assert.args[1]).to.eql([{ platformData: {} }, resource['putAndPostStruct']]);
  });

  it('.delete', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.delete.resolves({ data: RESPONSE_DATA });

    const data = await resource.delete('1');

    expect(fetch.delete.callCount).to.eql(1);
    expect(fetch.delete.args[0]).to.eql(['projects/1/members']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.platformDataCreate', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.granularPatch.resolves({ data: RESPONSE_DATA });

    const data = await resource.platformDataAdd('1', 'platformData.vendors[$id]', { name: 'name' }, { id: '1' });

    expect(fetch.granularPatch.callCount).to.eql(1);
    expect(fetch.granularPatch.args[0]).to.eql(['projects/1/members/platform-data/add', 'platformData.vendors[$id]', { name: 'name' }, { id: '1' }]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.platformDataUpdate', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.granularPatch.resolves({ data: RESPONSE_DATA });

    const data = await resource.platformDataUpdate('1', 'platformData.vendors[$id].name', 'name', { id: '1' });

    expect(fetch.granularPatch.callCount).to.eql(1);
    expect(fetch.granularPatch.args[0]).to.eql(['projects/1/members/platform-data/update', 'platformData.vendors[$id].name', 'name', { id: '1' }]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.platformDataDelete', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.granularPatch.resolves({ data: RESPONSE_DATA });

    const data = await resource.platformDataRemove('1', 'platformData.vendors[$id]', { id: '1' });

    expect(fetch.granularPatch.callCount).to.eql(1);
    expect(fetch.granularPatch.args[0]).to.eql(['projects/1/members/platform-data/remove', 'platformData.vendors[$id]', undefined, { id: '1' }]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });
});
