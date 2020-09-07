/* eslint-disable dot-notation */
import { expect } from 'chai';
import sinon from 'sinon';

import { Program } from '@/resources';
import Crud from '@/resources/crud';

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

  const resource = new Program(fetch as any);

  return {
    crud,
    fetch,
    resource,
  };
};

describe('ProgramResource', () => {
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

    const data = await resource.get<{ id: string; startID: string }>('1', ['id', 'startID']);

    expect(crud.getByID.callCount).to.eql(1);
    expect(crud.getByID.args[0]).to.eql(['1', ['id', 'startID']]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.create', async () => {
    const { crud, resource } = createClient();

    crud.post.resolves(RESPONSE_DATA);

    const body = {
      id: '1',
      startId: '1',
      skill_id: '1',

      lines: {
        1: { id: '1', type: 'type' },
      },
      commands: [],
      variables: [],
    };

    const data = await resource.create(body);

    expect(crud.post.callCount).to.eql(1);
    expect(crud.post.args[0]).to.eql([body]);
    expect(data).to.eql(RESPONSE_DATA);
  });

  it('.update', async () => {
    const { crud, resource } = createClient();

    crud.put.resolves(RESPONSE_DATA);

    const body = {
      startId: '1',
      skill_id: '1',

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

    expect(crud.put.callCount).to.eql(1);
    expect(crud.put.args[0]).to.eql(['1', body]);
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
});
