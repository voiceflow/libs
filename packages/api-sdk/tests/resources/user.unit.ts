/* eslint-disable dot-notation */
import atob from 'atob';
import { expect } from 'chai';
import JWT from 'jsonwebtoken';

import { User } from '@/resources';

const SAMPLE_USER = {
  id: 1,
  name: 'test',
  email: 'test@voiceflow.com',
  admin: 0,
};
const createResource = () => new User(JWT.sign(SAMPLE_USER, 'test'));

describe('UserResource', () => {
  it('.constructor', () => {
    const resource = createResource();

    expect(resource['creatorID']).to.eql(SAMPLE_USER.id);
    expect(resource['name']).to.eql(SAMPLE_USER.name);
    expect(resource['email']).to.eql(SAMPLE_USER.email);
  });

  it('.constructor with global atob', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.window = { atob };

    const resource = createResource();

    expect(resource['creatorID']).to.eql(SAMPLE_USER.id);
    expect(resource['name']).to.eql(SAMPLE_USER.name);
    expect(resource['email']).to.eql(SAMPLE_USER.email);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.window = undefined;
  });

  it('.constructor with API key', () => {
    const DEFAULT_USER = {
      creatorID: 0,
      name: '',
      email: '',
    };

    expect(new User('VF.APIkey')).to.eql(DEFAULT_USER);
  });
});
