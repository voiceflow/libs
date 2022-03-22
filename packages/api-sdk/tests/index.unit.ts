/* eslint-disable dot-notation */
import { Client } from '@api-sdk/client';
import ApiSDK, { SGenerateClientParams, SParams } from '@api-sdk/index';
import { PublicClient } from '@api-sdk/publicClient';
import { expect } from 'chai';
import JWT from 'jsonwebtoken';
import sinon from 'sinon';
import * as s from 'superstruct';

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

const USER_HASH = 'UserHash_16chars';
const AUTHORIZATION = USER_HASH + JWT.sign({}, 'test');

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

    const client = sdk.generateClient({ authorization: AUTHORIZATION });

    expect(client).to.be.instanceOf(Client);
    expect(assert.callCount).to.eql(2);
    expect(assert.args[1]).to.eql([{ authorization: AUTHORIZATION }, SGenerateClientParams]);
  });
});
