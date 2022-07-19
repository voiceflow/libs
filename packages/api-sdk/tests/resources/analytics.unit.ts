/* eslint-disable dot-notation */

import Analytics from '@api-sdk/resources/analytics';
import { expect } from 'chai';
import sinon from 'sinon';

const createClient = (encrypted = false) => {
  const fetch = {
    post: sinon.stub().resolves(undefined),
  };

  const encryption = {
    encryptJSON: sinon.stub().returns('message'),
  };

  const analytics = new Analytics(fetch as any, encrypted ? { encryption: encryption as any } : undefined);

  return { fetch, analytics, encryption };
};

describe('Analytics', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('.constructor', () => {
    const { fetch, analytics } = createClient();

    expect(analytics['fetch']).to.eql(fetch);
  });

  it('.endpoint', () => {
    const { analytics } = createClient();

    expect(analytics['endpoint']).to.eql('analytics');
  });

  it('.endpoint encrypted', () => {
    const { analytics } = createClient(true);

    expect(analytics['endpoint']).to.eql('vf-ping');
  });

  it('.encryptedPayload throws error', () => {
    const { analytics } = createClient(true);

    delete analytics['encryption'];

    expect(() => analytics['encryptedPayload']({})).to.throws('Encryption should be provided!');
  });

  it('.track', async () => {
    const { fetch, analytics } = createClient();

    await analytics.track('');
    await analytics.track('Event');
    await analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post.args).to.eql([
      ['analytics/private-track', { event: 'Event', envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined }],
      [
        'analytics/private-track',
        { event: 'Event 2', hashed: ['id'], properties: { id: 'id', value: 10 }, teamhashed: undefined, envIDs: undefined },
      ],
    ]);
  });

  it('.track encrypted', async () => {
    const { fetch, analytics } = createClient(true);

    await analytics.track('');
    await analytics.track('Event');
    await analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post.args).to.eql([
      ['vf-ping/private', { message: 'message' }],
      ['vf-ping/private', { message: 'message' }],
    ]);
  });

  it('.trackPublic', async () => {
    const { fetch, analytics } = createClient();

    await analytics.trackPublic('');
    await analytics.trackPublic('Event');
    await analytics.trackPublic('Event 2', { anonymousID: '1', properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post.args).to.eql([
      ['analytics/track', { event: 'Event', anonymousID: undefined, envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined }],
      [
        'analytics/track',
        { event: 'Event 2', anonymousID: '1', hashed: ['id'], properties: { id: 'id', value: 10 }, teamhashed: undefined, envIDs: undefined },
      ],
    ]);
  });

  it('.trackPublic encrypted', async () => {
    const { fetch, analytics } = createClient(true);

    await analytics.trackPublic('');
    await analytics.trackPublic('Event');
    await analytics.trackPublic('Event 2', { anonymousID: '1', properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post.args).to.eql([
      ['vf-ping', { message: 'message' }],
      ['vf-ping', { message: 'message' }],
    ]);
  });

  it('.track with batching', async () => {
    const { fetch, analytics } = createClient();

    analytics.setBatching(true);

    analytics.track('');
    analytics.track('Event');
    analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    await Promise.resolve();

    expect(fetch.post.args).to.eql([
      [
        'analytics/private-batch-track',
        [
          { event: 'Event', envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined },
          { event: 'Event 2', hashed: ['id'], properties: { id: 'id', value: 10 }, teamhashed: undefined, envIDs: undefined },
        ],
      ],
    ]);
  });

  it('.track encrypted with batching', async () => {
    const { fetch, analytics } = createClient(true);

    analytics.setBatching(true);

    analytics.track('');
    analytics.track('Event');
    analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    await Promise.resolve();

    expect(fetch.post.args).to.eql([['vf-ping/private-batch', { message: 'message' }]]);
  });

  it('.trackPublic with batching', async () => {
    const { fetch, analytics } = createClient();

    analytics.setBatching(true);

    analytics.trackPublic('');
    analytics.trackPublic('Event');
    analytics.trackPublic('Event 2', { anonymousID: '1', properties: { id: 'id', value: 10 }, hashed: ['id'] });

    await Promise.resolve();

    expect(fetch.post.args).to.eql([
      [
        'analytics/batch-track',
        [
          { event: 'Event', anonymousID: undefined, envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined },
          { event: 'Event 2', anonymousID: '1', hashed: ['id'], properties: { id: 'id', value: 10 }, teamhashed: undefined, envIDs: undefined },
        ],
      ],
    ]);
  });

  it('.trackPublic encrypted with batching', async () => {
    const { fetch, analytics } = createClient(true);

    analytics.setBatching(true);

    analytics.trackPublic('');
    analytics.trackPublic('Event');
    analytics.trackPublic('Event 2', { anonymousID: '1', properties: { id: 'id', value: 10 }, hashed: ['id'] });

    await Promise.resolve();

    expect(fetch.post.args).to.eql([['vf-ping/batch', { message: 'message' }]]);
  });

  it('.flush', async () => {
    const { fetch, analytics } = createClient();

    analytics.setBatching(true);

    analytics.track('');
    analytics.track('Event');
    analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    analytics.flush();

    expect(fetch.post.args).to.eql([
      [
        'analytics/private-batch-track',
        [
          { event: 'Event', envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined },
          { event: 'Event 2', hashed: ['id'], properties: { id: 'id', value: 10 }, teamhashed: undefined, envIDs: undefined },
        ],
      ],
    ]);
  });

  it('.flush handle error', async () => {
    const { fetch, analytics } = createClient();

    analytics.setBatching(true);

    analytics.track('');
    analytics.track('Event');
    analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    fetch.post.rejects(new Error('error'));

    await analytics.flush();

    expect(analytics['privateQueue']['queue']).to.eql([
      { event: 'Event', envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined },
      { event: 'Event 2', hashed: ['id'], properties: { id: 'id', value: 10 }, teamhashed: undefined, envIDs: undefined },
    ]);
  });

  it('.identify', async () => {
    const { fetch, analytics } = createClient();

    await analytics.identify({ traits: { id: 'id', value: 10 }, teamhashed: ['id'] });

    expect(fetch.post.args).to.eql([
      ['analytics/identify', { teamhashed: ['id'], traits: { id: 'id', value: 10 }, envIDs: undefined, hashed: undefined }],
    ]);
  });

  it('.identify encrypted', async () => {
    const { fetch, analytics } = createClient(true);

    await analytics.identify({ traits: { id: 'id', value: 10 }, teamhashed: ['id'] });

    expect(fetch.post.args).to.eql([['vf-ping/user', { message: 'message' }]]);
  });

  it('.identifyWorkspace', async () => {
    const { fetch, analytics } = createClient();

    await analytics.identifyWorkspace('id', { name: 'name' });

    expect(fetch.post.args).to.eql([['analytics/workspace/identify', { id: 'id', name: 'name' }]]);
  });

  it('.identifyWorkspace encrypted', async () => {
    const { fetch, analytics } = createClient(true);

    await analytics.identifyWorkspace('id', { name: 'name' });

    expect(fetch.post.args).to.eql([['vf-ping/workspace', { message: 'message' }]]);
  });
});
