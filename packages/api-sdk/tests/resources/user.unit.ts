/* eslint-disable dot-notation */
import { expect } from 'chai';

import { User } from '@/resources';

const createResource = () => new User('123');

describe('UserResource', () => {
  it('.constructor', () => {
    const resource = createResource();

    expect(resource['creatorID']).to.eql('123');
  });

  it('.getCreatorID', () => {
    const resource = createResource();

    expect(resource.getCreatorID()).to.eql('123');
  });
});
