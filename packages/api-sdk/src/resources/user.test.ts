/* eslint-disable dot-notation */
import JWT from 'jsonwebtoken';
import { describe, expect, it } from 'vitest';

import User from './user';

const USER_HASH = 'UserHash_16chars';
const SAMPLE_USER = {
  id: 1,
  name: 'test',
  email: 'test@voiceflow.com',
  admin: 0,
};
const createResource = () => new User(`${USER_HASH}${JWT.sign(SAMPLE_USER, 'test')}`);

describe('UserResource', () => {
  it('.constructor', () => {
    const resource = createResource();

    expect(resource['creatorID']).toBe(SAMPLE_USER.id);
    expect(resource['name']).toBe(SAMPLE_USER.name);
    expect(resource['email']).toBe(SAMPLE_USER.email);
  });

  it('.constructor throws error', () => {
    expect(() => new User('')).toThrow('Invalid JWT');
  });

  it('.constructor with API key', () => {
    const DEFAULT_USER = {
      creatorID: 0,
      name: '',
      email: '',
    };

    expect(new User('VF.APIkey')).toEqual(DEFAULT_USER);
  });
});
