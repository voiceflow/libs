import { describe, expect, it } from 'vitest';

import { Channel, createChannel, typeFactory } from './protocol';

describe('Utils | protocol', () => {
  describe('typeFactory()', () => {
    it('should generate a prefixed type', () => {
      expect(typeFactory('red', 'blue')('green')).toBe('red.blue.green');
    });
  });

  describe('Channel', () => {
    describe('build()', () => {
      it('store original build function directly', () => {
        const channel = new Channel(['foo', 'bar'], ({ foo, bar }) => `${foo}/fizz/buzz/${bar}`);

        expect(channel.build({ foo: '123', bar: '456' })).toBe('123/fizz/buzz/456');
      });
    });

    describe('buildMatcher()', () => {
      it('store build a matcher using the provided argument names', () => {
        const channel = new Channel(['foo', 'bar'], ({ foo, bar }) => `${foo}/fizz/buzz/${bar}`);

        expect(channel.buildMatcher()).toBe(':foo/fizz/buzz/:bar');
      });
    });

    describe('extend()', () => {
      it('create a channel built to be suffixed to the output of an existing channel', () => {
        const fooChannel = new Channel(['foo'], ({ foo }) => `foo/${foo}`);
        const barChannel = fooChannel.extend(['bar'], ({ bar }) => `bar/${bar}`);

        expect(barChannel.buildMatcher()).toBe('foo/:foo/bar/:bar');
        expect(barChannel.build({ foo: '123', bar: '456' })).toBe('foo/123/bar/456');
      });
    });

    describe('createChannel()', () => {
      it('constructs a new Channel', () => {
        const channel = createChannel(['foo'], ({ foo }) => `foo/${foo}`);

        expect(channel).toBeInstanceOf(Channel);
        expect(channel.buildMatcher()).toBe('foo/:foo');
        expect(channel.build({ foo: '123' })).toBe('foo/123');
      });
    });
  });
});
