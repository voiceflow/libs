import { Note } from '@api-sdk/resources';
import { expect } from 'chai';
import sinon from 'sinon';

const NOTE = { id: 'qwe', text: 'text', mentions: [1, 2], meta: {} };

const createClient = () => {
  const fetch = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
  };

  const resource = new Note(fetch as any);

  return {
    fetch,
    resource,
  };
};

describe('NoteResource', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('.upsert', async () => {
    const { fetch, resource } = createClient();

    fetch.put.resolves({ data: NOTE });

    const data = await resource.upsert('1', NOTE as any);

    expect(fetch.put.callCount).to.eql(1);
    expect(fetch.put.args[0]).to.eql([`notes/1`, { note: NOTE }]);
    expect(data).to.eql(NOTE);
  });

  it('.delete', async () => {
    const { fetch, resource } = createClient();

    await resource.delete('1', 'qwe');

    expect(fetch.delete.callCount).to.eql(1);
    expect(fetch.delete.args[0]).to.eql([`notes/1/qwe`]);
  });
});
