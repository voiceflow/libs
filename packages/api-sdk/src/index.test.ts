/* eslint-disable dot-notation */
import JWT from 'jsonwebtoken';
import * as s from 'superstruct';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import ApiSDK, { SGenerateClientParams, SParams } from '.';
import { Client } from './client';
import { PublicClient } from './publicClient';

const createSDK = () => {
  const assert = vi.spyOn(s, 'assert');

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
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('.constructor', () => {
    const { sdk, assert } = createSDK();

    expect(sdk['clientKey']).toBe('123');
    expect(sdk['apiEndpoint']).toBe('endpoint');
    expect(assert).toHaveBeenCalledTimes(1);
    expect(assert).toHaveBeenCalledWith({ clientKey: '123', apiEndpoint: 'endpoint' }, SParams);
  });

  it('.generatePublicClient', () => {
    const { sdk, assert } = createSDK();

    const client = sdk.generatePublicClient();

    expect(client).toBeInstanceOf(PublicClient);
    expect(assert).toHaveBeenCalledTimes(1);
  });

  it('.generateClient', () => {
    const { sdk, assert } = createSDK();

    const client = sdk.generateClient({ authorization: AUTHORIZATION });

    expect(client).toBeInstanceOf(Client);
    expect(assert).toHaveBeenCalledTimes(2);
    expect(assert).toHaveBeenNthCalledWith(2, { authorization: AUTHORIZATION }, SGenerateClientParams);
  });
});
