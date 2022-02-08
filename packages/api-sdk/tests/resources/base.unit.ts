/* eslint-disable dot-notation */

import BaseResource from '@api-sdk/resources/base';
import { expect } from 'chai';
import sinon from 'sinon';

const createClient = () => {
  const fetch = {
    get: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    patch: sinon.stub(),
    delete: sinon.stub(),
    initWithOptions: sinon.stub(),
  };

  class Resource {}

  const resource = new BaseResource<Resource>({
    fetch: fetch as any,
    clazz: Resource,
    endpoint: 'endpoint',
  });

  return {
    fetch,
    resource,
    Resource,
  };
};

describe('BaseResource', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('.constructor', () => {
    const { fetch, resource, Resource } = createClient();

    expect(resource['fetch']).to.eql(fetch);
    expect(resource['clazz']).to.eql(Resource);
    expect(resource['endpoint']).to.eql('endpoint');
  });

  it('.options', () => {
    const { fetch, resource, Resource } = createClient();

    const instance = resource.options({
      headers: { key: 'val' },
    });

    expect(instance).to.be.instanceOf(Resource);
    expect(fetch.initWithOptions.args[0]).to.eql([
      {
        headers: { key: 'val' },
      },
    ]);
  });
});
