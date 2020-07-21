/* eslint-disable dot-notation */
import { expect } from 'chai';
import sinon from 'sinon';
import * as s from 'superstruct';

import { SProjectID } from '@/models';
import Members from '@/resources/project/members';

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

  const resource = new Members(fetch as any, 'projects');

  return {
    fetch,
    assert,
    resource,
  };
};

describe('ProjectResource', () => {
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

  it('.getCurrentUser', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getCurrentUser('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/member']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.getCurrentUser fields', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.get.resolves({ data: RESPONSE_DATA });

    const data = await resource.getCurrentUser<{ creatorID: number }>('1', ['creatorID']);

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['projects/1/member?fields=creatorID']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });

  it('.createCurrentUser', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.post.resolves({ data: RESPONSE_DATA });

    const data = await resource.createCurrentUser('1', { platformData: {} });

    expect(fetch.post.callCount).to.eql(1);
    expect(fetch.post.args[0]).to.eql(['projects/1/members', { platformData: {} }]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
    expect(assert.args[1]).to.eql([{ platformData: {} }, resource['putAndPostStruct']]);
  });

  it('.updateCurrentUser', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.patch.resolves({ data: RESPONSE_DATA });

    const data = await resource.updateCurrentUser('1', { platformData: {} });

    expect(fetch.patch.callCount).to.eql(1);
    expect(fetch.patch.args[0]).to.eql(['projects/1/members', { platformData: {} }]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
    expect(assert.args[1]).to.eql([{ platformData: {} }, resource['patchStruct']]);
  });

  it('.deleteCurrentUser', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.delete.resolves({ data: RESPONSE_DATA });

    const data = await resource.deleteCurrentUser('1');

    expect(fetch.delete.callCount).to.eql(1);
    expect(fetch.delete.args[0]).to.eql(['projects/1/members']);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql(['1', SProjectID]);
  });
});
