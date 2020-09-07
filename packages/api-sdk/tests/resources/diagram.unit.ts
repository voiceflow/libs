/* eslint-disable dot-notation */
import { expect } from 'chai';
import sinon from 'sinon';
import * as s from 'superstruct';

import { SNodeID } from '@/models';
import { Diagram } from '@/resources';
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

  const resource = new Diagram(fetch as any);

  return {
    crud,
    fetch,
    assert,
    resource,
  };
};

describe('DiagramResource', () => {
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

    const data = await resource.get('1', ['name', 'zoom', 'offsetX']);

    expect(crud.getByID.callCount).to.eql(1);
    expect(crud.getByID.args[0]).to.eql(['1', ['name', 'zoom', 'offsetX']]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.getRTC', async () => {
    const { fetch, resource } = createClient();

    const response = { diagram: { name: 'diagram name' }, timestamp: 12345 };
    fetch.get.resolves({ data: response });

    const data = await resource.getRTC('1');

    expect(fetch.get.callCount).to.eql(1);
    expect(fetch.get.args[0]).to.eql(['diagrams/1/rtc']);
    expect(data).to.eql(response);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.resolves(RESPONSE_DATA);

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

    expect(crud.post.callCount).to.eql(1);
    expect(crud.post.args[0]).to.eql([body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.patch.resolves(RESPONSE_DATA);

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

    expect(crud.patch.callCount).to.eql(1);
    expect(crud.patch.args[0]).to.eql(['1', body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.updateNode', async () => {
    const { fetch, assert, resource } = createClient();

    fetch.put.resolves({ data: RESPONSE_DATA });

    const data = await resource.updateNode('1', '2', { type: 'type', data: { key: 'value' } });

    expect(fetch.put.callCount).to.eql(1);
    expect(fetch.put.args[0]).to.eql(['diagrams/1/nodes/2', { type: 'type', data: { key: 'value' } }]);
    expect(data).to.eql(RESPONSE_DATA);
    expect(assert.callCount).to.eql(3);
    expect(assert.args[0]).to.eql(['1', resource['struct'].schema._id]);
    expect(assert.args[1]).to.eql(['2', SNodeID]);
    expect(assert.args[2]).to.eql([{ type: 'type', data: { key: 'value' } }, resource['_nodePutAndPostStruct']]);
  });

  it('.delete', async () => {
    const { crud, resource } = createClient();

    crud.delete.resolves(RESPONSE_DATA);

    const data = await resource.delete('1');

    expect(crud.delete.callCount).to.eql(1);
    expect(crud.delete.args[0]).to.eql(['1']);
    expect(data).to.eql(RESPONSE_DATA);
  });
});
