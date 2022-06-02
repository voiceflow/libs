import { replaceVariables } from '@common/utils/variables';
import { expect } from 'chai';

describe('Utils | variables', () => {
  describe('replaceVariables', () => {
    it('replaces variable annotations with no selector and trims the result by default', () => {
      // arrange
      const variables = {
        name: 'bob',
        age: 32,
      };

      // act
      const result = replaceVariables(' hello, my name is {name}, and i am {age} years old ', variables);

      // assert
      expect(result).to.equal('hello, my name is bob, and i am 32 years old');
    });

    it('replaces variable annotations and applies a modifier', () => {
      // arrange
      const variables = {
        age: 20,
      };

      // act
      const result = replaceVariables('i am {age} years old', variables, (value) => (typeof value === 'number' ? value * 2 : value));

      // assert
      expect(result).to.equal('i am 40 years old');
    });

    it('replaces variable annotations and does not trim the result', () => {
      // arrange
      const variables = {
        value: 'world',
      };

      // act
      const result = replaceVariables(' hello {value} ', variables, undefined, { trim: false });

      // assert
      expect(result).to.equal(' hello world ');
    });

    it('replaces variable annotations with a property selector', () => {
      // arrange
      const variables = {
        job: {
          company: 'voiceflow',
          position: 'software engineer',
          team: 'creator',
        },
      };

      // act
      const result = replaceVariables('i work at {job.company} as a {job.position} on the {job.team} team', variables);

      // assert
      expect(result).to.equal('i work at voiceflow as a software engineer on the creator team');
    });

    it('does replaces variable annotations if the property does not exist', () => {
      // arrange
      const variables = {
        obj: {
          a: 1,
        },
      };

      // act
      const result = replaceVariables('what is {obj.b}', variables);

      // assert
      expect(result).to.equal('what is {obj.b}');
    });

    it('replaces variable annotations with an element selector (array index)', () => {
      // arrange
      const variables = {
        favFoods: ['takoyaki', 'onigiri', 'taiyaki'],
      };

      // act
      const result = replaceVariables('most favorite food is {favFoods[0]}, second favorite is {favFoods[1]}, and third is {favFoods[2]}', variables);

      // assert
      expect(result).to.equal('most favorite food is takoyaki, second favorite is onigiri, and third is taiyaki');
    });

    it('recursively replaces variable annotations for element selectors (array index)', () => {
      // arrange
      const variables = {
        payload: {
          property: [1, 2],
        },
        index: 1,
      };

      // act
      const result = replaceVariables('the value is {payload.property[{index}]}', variables);

      // assert
      expect(result).to.equal('the value is 2');
    });

    it('recursively replaces variable annotations for element selectors (property name)', () => {
      // arrange
      const variables = {
        payload: {
          key: {
            value: 'hello',
          },
        },
        property: {
          value: 'key',
        },
      };

      // act
      const result = replaceVariables('the value is {payload[{property.value}].value}', variables);

      // assert
      expect(result).to.equal('the value is hello');
    });

    it('replaces variable annotations using a variable annotation returned from a previous lookup', () => {
      // arrange
      const variables = {
        payload: {
          key: {
            value: 'world',
          },
        },
        property: {
          value: '{lookup}',
        },
        lookup: 'key',
      };

      // act
      const result = replaceVariables('the value is {payload[{property.value}].value}', variables);

      // assert
      expect(result).to.equal('the value is world');
    });

    it('resolves closely nested variable annotations', () => {
      // arrange
      const variables = {
        a: 'b',
        b: ':)',
      };

      // act
      const result = replaceVariables('this is a weird nested variable {{a}}', variables);

      // assert
      expect(result).to.equal('this is a weird nested variable :)');
    });

    it('does not resolve a non-object property selector', () => {
      // arrange
      const variables = {
        a: 1,
      };

      // act
      const result = replaceVariables('accessing non-object {a.b}', variables);

      // assert
      expect(result).to.equal('accessing non-object {a.b}');
    });

    it('does not resolve an array index that is too large', () => {
      // arrange
      const variables = {
        a: [1, 2],
      };

      // act
      const result = replaceVariables('accessing index {a[100]}', variables);

      // assert
      expect(result).to.equal('accessing index {a[100]}');
    });

    describe('edge cases', () => {
      it('ignores empty variable annotations', () => {
        // arrange
        const variables = {
          '': 123,
        };

        // act
        const result = replaceVariables('this is a blank variable {}', variables);

        // assert
        expect(result).to.equal('this is a blank variable {}');
      });

      it('breaks during variable annotation reference loop', () => {
        // arrange
        const variables = {
          a: '{b}',
          b: '{a}',
        };

        // act
        const result = replaceVariables('{a}', variables);

        // assert
        expect(result).to.equal('{b}');
      });
    });
  });
});
