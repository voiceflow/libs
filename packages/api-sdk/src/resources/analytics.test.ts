/* eslint-disable dot-notation */

import { describe, expect, it, vi } from 'vitest';

import Analytics from './analytics';

const createClient = (encrypted = false) => {
  const fetch = {
    post: vi.fn().mockResolvedValue(undefined),
  };

  const encryption = {
    encryptJSON: vi.fn().mockReturnValue('message'),
  };

  const analytics = new Analytics(fetch as any, encrypted ? { encryption: encryption as any } : undefined);

  return { fetch, analytics, encryption };
};

describe('Analytics', () => {
  it('.constructor', () => {
    const { fetch, analytics } = createClient();

    expect(analytics['fetch']).toBe(fetch);
  });

  it('.endpoint', () => {
    const { analytics } = createClient();

    expect(analytics['endpoint']).toBe('analytics');
  });

  it('.endpoint encrypted', () => {
    const { analytics } = createClient(true);

    expect(analytics['endpoint']).toBe('vf-ping');
  });

  it('.encryptedPayload throws error', () => {
    const { analytics } = createClient(true);

    delete analytics['encryption'];

    expect(() => analytics['encryptedPayload']({})).toThrow('Encryption should be provided!');
  });

  it('.track', async () => {
    const { fetch, analytics } = createClient();

    await analytics.track('');
    await analytics.track('Event');
    await analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post).toHaveBeenCalledWith('analytics/private-track', {
      event: 'Event',
      envIDs: undefined,
      hashed: undefined,
      properties: {},
      teamhashed: undefined,
    });
    expect(fetch.post).toHaveBeenCalledWith('analytics/private-track', {
      event: 'Event 2',
      hashed: ['id'],
      properties: { id: 'id', value: 10 },
      teamhashed: undefined,
      envIDs: undefined,
    });
  });

  it('.track encrypted', async () => {
    const { fetch, analytics } = createClient(true);

    await analytics.track('');
    await analytics.track('Event');
    await analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post).toHaveBeenCalledWith('vf-ping/private', { message: 'message' });
    expect(fetch.post).toHaveBeenCalledWith('vf-ping/private', { message: 'message' });
  });

  it('.trackPublic', async () => {
    const { fetch, analytics } = createClient();

    await analytics.trackPublic('');
    await analytics.trackPublic('Event');
    await analytics.trackPublic('Event 2', { anonymousID: '1', properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post).toHaveBeenCalledWith('analytics/track', {
      event: 'Event',
      anonymousID: undefined,
      envIDs: undefined,
      hashed: undefined,
      properties: {},
      teamhashed: undefined,
    });
    expect(fetch.post).toHaveBeenCalledWith('analytics/track', {
      event: 'Event 2',
      anonymousID: '1',
      hashed: ['id'],
      properties: { id: 'id', value: 10 },
      teamhashed: undefined,
      envIDs: undefined,
    });
  });

  it('.trackPublic encrypted', async () => {
    const { fetch, analytics } = createClient(true);

    await analytics.trackPublic('');
    await analytics.trackPublic('Event');
    await analytics.trackPublic('Event 2', { anonymousID: '1', properties: { id: 'id', value: 10 }, hashed: ['id'] });

    expect(fetch.post).toHaveBeenCalledWith('vf-ping', { message: 'message' });
    expect(fetch.post).toHaveBeenCalledWith('vf-ping', { message: 'message' });
  });

  it('.track with batching', async () => {
    const { fetch, analytics } = createClient();

    analytics.setBatching(true);

    analytics.track('');
    analytics.track('Event');
    analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    await Promise.resolve();

    expect(fetch.post).toHaveBeenCalledWith('analytics/private-batch-track', [
      { event: 'Event', envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined },
      {
        event: 'Event 2',
        hashed: ['id'],
        properties: { id: 'id', value: 10 },
        teamhashed: undefined,
        envIDs: undefined,
      },
    ]);
  });

  it('.track encrypted with batching', async () => {
    const { fetch, analytics } = createClient(true);

    analytics.setBatching(true);

    analytics.track('');
    analytics.track('Event');
    analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    await Promise.resolve();

    expect(fetch.post).toHaveBeenCalledWith('vf-ping/private-batch', { message: 'message' });
  });

  it('.trackPublic with batching', async () => {
    const { fetch, analytics } = createClient();

    analytics.setBatching(true);

    analytics.trackPublic('');
    analytics.trackPublic('Event');
    analytics.trackPublic('Event 2', { anonymousID: '1', properties: { id: 'id', value: 10 }, hashed: ['id'] });

    await Promise.resolve();

    expect(fetch.post).toHaveBeenCalledWith('analytics/batch-track', [
      {
        event: 'Event',
        anonymousID: undefined,
        envIDs: undefined,
        hashed: undefined,
        properties: {},
        teamhashed: undefined,
      },
      {
        event: 'Event 2',
        anonymousID: '1',
        hashed: ['id'],
        properties: { id: 'id', value: 10 },
        teamhashed: undefined,
        envIDs: undefined,
      },
    ]);
  });

  it('.trackPublic encrypted with batching', async () => {
    const { fetch, analytics } = createClient(true);

    analytics.setBatching(true);

    analytics.trackPublic('');
    analytics.trackPublic('Event');
    analytics.trackPublic('Event 2', { anonymousID: '1', properties: { id: 'id', value: 10 }, hashed: ['id'] });

    await Promise.resolve();

    expect(fetch.post).toHaveBeenCalledWith('vf-ping/batch', { message: 'message' });
  });

  it('.flush', async () => {
    const { fetch, analytics } = createClient();

    analytics.setBatching(true);

    analytics.track('');
    analytics.track('Event');
    analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    analytics.flush();

    expect(fetch.post).toHaveBeenCalledWith('analytics/private-batch-track', [
      { event: 'Event', envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined },
      {
        event: 'Event 2',
        hashed: ['id'],
        properties: { id: 'id', value: 10 },
        teamhashed: undefined,
        envIDs: undefined,
      },
    ]);
  });

  it('.flush handle error', async () => {
    const { fetch, analytics } = createClient();

    analytics.setBatching(true);

    analytics.track('');
    analytics.track('Event');
    analytics.track('Event 2', { properties: { id: 'id', value: 10 }, hashed: ['id'] });

    fetch.post.mockRejectedValue(new Error('error'));

    await analytics.flush();

    expect(analytics['privateQueue']['queue']).toEqual([
      { event: 'Event', envIDs: undefined, hashed: undefined, properties: {}, teamhashed: undefined },
      {
        event: 'Event 2',
        hashed: ['id'],
        properties: { id: 'id', value: 10 },
        teamhashed: undefined,
        envIDs: undefined,
      },
    ]);
  });

  it('.identify', async () => {
    const { fetch, analytics } = createClient();

    await analytics.identify({ traits: { id: 'id', value: 10 }, teamhashed: ['id'] });

    expect(fetch.post).toHaveBeenCalledWith('analytics/identify', {
      teamhashed: ['id'],
      traits: { id: 'id', value: 10 },
      envIDs: undefined,
      hashed: undefined,
    });
  });

  it('.identify encrypted', async () => {
    const { fetch, analytics } = createClient(true);

    await analytics.identify({ traits: { id: 'id', value: 10 }, teamhashed: ['id'] });

    expect(fetch.post).toHaveBeenCalledWith('vf-ping/user', { message: 'message' });
  });

  it('.identifyWorkspace', async () => {
    const { fetch, analytics } = createClient();

    await analytics.identifyWorkspace('id', { name: 'name' });

    expect(fetch.post).toHaveBeenCalledWith('analytics/workspace/identify', { id: 'id', name: 'name' });
  });

  it('.identifyWorkspace encrypted', async () => {
    const { fetch, analytics } = createClient(true);

    await analytics.identifyWorkspace('id', { name: 'name' });

    expect(fetch.post).toHaveBeenCalledWith('vf-ping/workspace', { message: 'message' });
  });
});
