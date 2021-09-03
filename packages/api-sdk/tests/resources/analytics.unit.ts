/* eslint-disable dot-notation */

import { expect } from 'chai';
import sinon from 'sinon';

import Analytics from '@/resources/analytics';

const createClient = () => {
  const fetch = {
    post: sinon.stub(),
  };

  const analytics = new Analytics(fetch as any);

  return { fetch, analytics };
};

describe('Analytics', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('.constructor', () => {
    const { fetch, analytics } = createClient();

    expect(analytics['fetch']).to.eql(fetch);
  });

  it('._getEndpoint', () => {
    const { analytics } = createClient();

    expect(analytics['_getEndpoint']()).to.eql('analytics');
  });

  it('.track', async () => {
    const { fetch, analytics } = createClient();

    await analytics.track('Event');
    await analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post.args).to.eql([
      ['analytics/track', { event: 'Event', hashed: undefined, properties: {}, teamhashed: undefined }],
      ['analytics/track', { event: 'Event 2', hashed: ['id'], properties: { id: 'id', value: 10 }, teamhashed: undefined }],
    ]);
  });

  it('.identify', async () => {
    const { fetch, analytics } = createClient();

    await analytics.identify({ traits: { id: 'id', value: 10 }, teamhashed: ['id'] });

    expect(fetch.post.args).to.eql([['analytics/identify', { teamhashed: ['id'], traits: { id: 'id', value: 10 }, hashed: undefined }]]);
  });

  it('.identifyWorkspace', async () => {
    const { fetch, analytics } = createClient();

    await analytics.identifyWorkspace('id', { name: 'name' });

    expect(fetch.post.args).to.eql([['analytics/workspace/identify', { id: 'id', name: 'name' }]]);
  });
});
