import { Channel, createChannel, typeFactory } from '@common/utils/protocol';
import { expect } from 'chai';

describe('Utils | protocol', () => {
  describe('typeFactory()', () => {
    it('should generate a prefixed type', () => {
      expect(typeFactory('red', 'blue')('green')).to.eq('red.blue.green');
    });
  });

  describe('Channel', () => {
    describe('build()', () => {
      it('store original build function directly', () => {
        const channel = new Channel(['foo', 'bar'], ({ foo, bar }) => `${foo}/fizz/buzz/${bar}`);

        expect(channel.build({ foo: '123', bar: '456' })).to.eq('123/fizz/buzz/456');
      });
    });

    describe('buildMatcher()', () => {
      it('store build a matcher using the provided argument names', () => {
        const channel = new Channel(['foo', 'bar'], ({ foo, bar }) => `${foo}/fizz/buzz/${bar}`);

        expect(channel.buildMatcher()).to.eq(':foo/fizz/buzz/:bar');
      });
    });

    describe('extend()', () => {
      it('create a channel built to be suffixed to the output of an existing channel', () => {
        const fooChannel = new Channel(['foo'], ({ foo }) => `foo/${foo}`);
        const barChannel = fooChannel.extend(['bar'], ({ bar }) => `bar/${bar}`);

        expect(barChannel.buildMatcher()).to.eq('foo/:foo/bar/:bar');
        expect(barChannel.build({ foo: '123', bar: '456' })).to.eq('foo/123/bar/456');
      });
    });

    describe('createChannel()', () => {
      it('constructs a new Channel', () => {
        const channel = createChannel(['foo'], ({ foo }) => `foo/${foo}`);

        expect(channel).to.be.an.instanceOf(Channel);
        expect(channel.buildMatcher()).to.eq('foo/:foo');
        expect(channel.build({ foo: '123' })).to.eq('foo/123');
      });
    });
  });
});
