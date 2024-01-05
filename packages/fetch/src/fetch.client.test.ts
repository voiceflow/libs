import { ClientException } from '@voiceflow/exception';
import fetchMock from 'fetch-mock';
import jestFetchMock from 'jest-fetch-mock';
import { URL as NodeURL } from 'node:url';
import * as undici from 'undici';

import { FetchClient } from './fetch.client';

type NodeFetch = typeof undici['fetch'];

const TARGET_URL = 'http://example.com/resource/123';
const JSON_HEADERS = { 'content-type': 'application/json' };

jestFetchMock.enableMocks();

describe('Fetch Client', () => {
  let sandbox: fetchMock.FetchMockSandbox;

  beforeAll(() => {
    jestFetchMock.mockImplementation(async () => null as any);
  });

  beforeEach(() => {
    sandbox = fetchMock.sandbox();
  });

  describe('#raw()', () => {
    const url = 'http://example.com';

    describe('window.fetch', () => {
      let fetchClient: FetchClient;

      beforeEach(() => {
        fetchClient = new FetchClient();
      });

      it('should pass through Request instance and options to window.fetch', async () => {
        const request = new Request(new URL(url));
        const options: RequestInit = { cache: 'only-if-cached' };

        await fetchClient.raw(request, options);

        expect(jestFetchMock).toHaveBeenCalledWith(request, options);
      });

      it('should pass through URL instance to window.fetch', async () => {
        const request = new URL(url);

        await fetchClient.raw(request);

        expect(jestFetchMock).toHaveBeenCalledWith(request);
      });

      it('should pass through string to window.fetch', async () => {
        await fetchClient.raw(url);

        expect(jestFetchMock).toHaveBeenCalledWith(url);
      });
    });

    describe('undici.fetch', () => {
      let fetchSpy: jest.Mock;
      let fetchClient: FetchClient<undici.RequestInit, NodeURL | undici.Request, undici.Response>;

      beforeEach(() => {
        fetchSpy = jest.fn();
        fetchClient = new FetchClient(fetchSpy as NodeFetch);
      });

      it('should pass through Request instance and options to undici.fetch', async () => {
        const request = new undici.Request(new NodeURL(url));
        const options: undici.RequestInit = { dispatcher: new undici.Dispatcher() };

        await fetchClient.raw(request, options);

        expect(fetchSpy).toHaveBeenCalledWith(request, options);
      });

      it('should pass through URL instance to undici.fetch', async () => {
        const request = new NodeURL(url);

        await fetchClient.raw(request);

        expect(fetchSpy).toHaveBeenCalledWith(request);
      });

      it('should pass through string to undici.fetch', async () => {
        await fetchClient.raw(url);

        expect(fetchSpy).toHaveBeenCalledWith(url);
      });
    });
  });

  describe('#delete()', () => {
    it('should send DELETE request', async () => {
      const fetch = new FetchClient(sandbox);
      sandbox.delete(TARGET_URL, 200);

      await fetch.delete(TARGET_URL);

      expect(sandbox.done()).toBe(true);
    });
  });

  describe('#get()', () => {
    it('should support url search params', async () => {
      const expectedURL = `${TARGET_URL}?test=encode+this%26`;
      const fetch = new FetchClient(sandbox);
      sandbox.get(expectedURL, { status: 200 });

      await fetch.get(TARGET_URL, {
        query: { test: 'encode this&' },
      });

      expect(sandbox.done()).toBe(true);
    });

    it('should send GET request', async () => {
      const data = { foo: 'bar' };
      const fetch = new FetchClient(sandbox);
      sandbox.get(TARGET_URL, { status: 200, body: data });

      const result = await fetch.get(TARGET_URL).json();

      expect(result).toEqual(data);
      expect(sandbox.done()).toBe(true);
    });
  });

  describe('#head()', () => {
    it('should send HEAD request', async () => {
      const fetch = new FetchClient(sandbox);
      sandbox.head(TARGET_URL, 200);

      await fetch.head(TARGET_URL);

      expect(sandbox.done()).toBe(true);
    });
  });

  describe('#patch()', () => {
    it('should send PATCH request', async () => {
      const body = { foo: 'bar' };
      const fetch = new FetchClient(sandbox);
      sandbox.patch({ url: TARGET_URL, body, headers: JSON_HEADERS }, 200);

      await fetch.patch(TARGET_URL, { json: body });

      expect(sandbox.done()).toBe(true);
    });
  });

  describe('#post()', () => {
    it('should send POST request', async () => {
      const body = { foo: 'bar' };
      const data = { fizz: 'buzz' };
      const fetch = new FetchClient(sandbox);
      sandbox.post({ url: TARGET_URL, body, headers: JSON_HEADERS }, { status: 200, body: data });

      const result = await fetch.post(TARGET_URL, { json: body }).json();

      expect(result).toEqual(data);
      expect(sandbox.done()).toBe(true);
    });
  });

  describe('#put()', () => {
    it('should send PUT request', async () => {
      const body = { foo: 'bar' };
      const fetch = new FetchClient(sandbox);
      sandbox.put({ url: TARGET_URL, body, headers: JSON_HEADERS }, 200);

      await fetch.put(TARGET_URL, { json: body });

      expect(sandbox.done()).toBe(true);
    });
  });

  describe('#config.baseURL', () => {
    it('should prefix request URL with provided baseURL option', async () => {
      const baseURL = 'http://example.com';
      const path = 'foo/bar';
      const fetch = new FetchClient(sandbox, { baseURL });
      sandbox.get(`${baseURL}/${path}`, 200);

      await fetch.get(path);

      expect(sandbox.done()).toBe(true);
    });

    it('should not prefix request using URL instance', async () => {
      const url = new NodeURL(TARGET_URL);
      const fetchSpy = jest.fn().mockResolvedValue(new undici.Response());
      const fetchClient = new FetchClient(fetchSpy, { baseURL: 'http://foo.com/' });

      await fetchClient.get(url);

      expect(fetchSpy).toHaveBeenCalledWith(url, { method: 'GET', headers: {}, body: undefined });
    });
  });

  describe('#config.headers', () => {
    const baseURL = 'http://example.com';
    const path = 'foo/bar';

    it('should join global headers with request headers', async () => {
      const globalHeaders = { foo: 'one', bar: 'two' };
      const headers = { bar: 'three', fizz: 'four' };
      const fetch = new FetchClient(sandbox, { baseURL, headers: globalHeaders });
      sandbox.get({ url: `${baseURL}/${path}`, headers: { ...globalHeaders, ...headers } }, 200);

      await fetch.get(path, { headers });

      expect(sandbox.done()).toBe(true);
    });

    it('should allow global headers to be updated asynchronously', async () => {
      const globalHeaders = new Map<string, string>([['foo', 'bar']]);
      const fetch = new FetchClient(sandbox, { baseURL, headers: globalHeaders });
      sandbox.get({ url: `${baseURL}/one`, headers: { foo: 'bar' } }, 200);
      sandbox.get({ url: `${baseURL}/two`, headers: { foo: 'bar', fizz: 'buzz' } }, 200);

      await fetch.get('one');
      globalHeaders.set('fizz', 'buzz');
      await fetch.get('two');

      expect(sandbox.done()).toBe(true);
    });
  });

  describe('request options', () => {
    it('should accept headers as a Map', async () => {
      const fetch = new FetchClient(sandbox);
      const headers = new Map([['foo', 'bar']]);
      sandbox.get({ url: TARGET_URL, headers: { foo: 'bar' } }, 200);

      await fetch.get(TARGET_URL, { headers });

      expect(sandbox.done()).toBe(true);
    });

    it('should accept headers as an object', async () => {
      const fetch = new FetchClient(sandbox);
      const headers = { foo: 'bar' };
      sandbox.get({ url: TARGET_URL, headers }, 200);

      await fetch.get(TARGET_URL, { headers });

      expect(sandbox.done()).toBe(true);
    });
  });

  describe('error handling', () => {
    it('should throw ClientException on non-2xx status code', async () => {
      const fetch = new FetchClient(sandbox);
      sandbox.head(TARGET_URL, 404);

      await expect(fetch.head(TARGET_URL)).rejects.toBeInstanceOf(ClientException);

      expect(sandbox.done()).toBe(true);
    });

    it('should extract error details from response body', async () => {
      const status = 500;
      const message = 'something went wrong!';
      const cause = 'the dog ate my homework';
      const details = { traceID: '123' };
      const fetch = new FetchClient(sandbox);
      sandbox.get(TARGET_URL, { status, body: { message, cause, details } });

      try {
        await fetch.get(TARGET_URL);

        fail('expected to throw ClientException');
      } catch (err) {
        if (ClientException.instanceOf(err)) {
          expect(err.statusCode).toEqual(status);
          expect(err.statusText).toEqual('Internal Server Error');
          expect(err.message).toEqual(message);
          expect(err.cause).toEqual(cause);
          expect(err.details).toEqual(details);
        } else {
          fail('should be an instance of ClientException');
        }
      }

      expect(sandbox.done()).toBe(true);
    });
  });
});
