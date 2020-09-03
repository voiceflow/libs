/* eslint-disable dot-notation */
import { expect } from 'chai';
import JWT from 'jsonwebtoken';
import sinon from 'sinon';
import * as s from 'superstruct';

import { Client, PublicClient } from '@/client';
import ApiSDK, { SGenerateClientParams, SParams } from '@/index';

const createSDK = () => {
  const assert = sinon.stub(s, 'assert');

  const sdk = new ApiSDK({
    clientKey: '123',
    apiEndpoint: 'endpoint',
  });

  return {
    sdk,
    assert,
  };
};

const authorization = JWT.sign({}, 'test');

describe('ApiSDK', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('.constructor', () => {
    const { sdk, assert } = createSDK();

    expect(sdk['clientKey']).to.eql('123');
    expect(sdk['apiEndpoint']).to.eql('endpoint');
    expect(assert.callCount).to.eql(1);
    expect(assert.args[0]).to.eql([{ clientKey: '123', apiEndpoint: 'endpoint' }, SParams]);
  });

  it('.generatePublicClient', () => {
    const { sdk, assert } = createSDK();

    const client = sdk.generatePublicClient();

    expect(client).to.be.instanceOf(PublicClient);
    expect(assert.callCount).to.eql(1);
  });

  it('.generateClient', () => {
    const { sdk, assert } = createSDK();

    const client = sdk.generateClient({ authorization });

    expect(client).to.be.instanceOf(Client);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[1]).to.eql([{ authorization }, SGenerateClientParams]);
  });
});
