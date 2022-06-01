
import { replaceVariables } from '@common/utils/variables';

import { expect } from 'chai';

describe('Utils | variables', () => {
  describe('replaceVariables', () => {
    const variables = {
      'name': 'bob',
      'age': 32,
      'favFoods': [
        'takoyaki', 'onigiri', 'taiyaki'
      ],
      'job': {
        'company': 'voiceflow',
        'position': 'software engineer',
        'team': 'creator'
      }
    };
    it('correctly replaces simple variables', () => {
      expect(replaceVariables('hello, my name is {name}, and i am {age} years old', variables))
        .to.eq('hello, my name is bob, and i am 32 years old');
      expect(replaceVariables('{name} {name} {name}', variables))
        .to.eq('bob bob bob');
    });
    it('variables that are not defined do not get expanded', () => {
      expect(replaceVariables('hello, my name is {name} and i work at {workplace}', variables))
        .to.eq('hello, my name is bob and i work at {workplace}');
      expect(replaceVariables('hello, my name is {Name}', variables))
        .to.eq('hello, my name is {Name}');
    });

    it('array access works', () => {
      expect(replaceVariables('most favorite food is {favFoods[0]}, second favorite is {favFoods[1]}, and third is {favFoods[2]}', variables))
        .to.eq('most favorite food is takoyaki, second favorite is onigiri, and third is taiyaki');
    });
    it('index out of range', () => {
    });

    it('object access works', () => {
      expect(replaceVariables('i work at {job.company} as a {job.position} on the {job.team} team', variables))
        .to.eq('i work at voiceflow as a software engineer on the creator team');
    });
    it('non-existent fields', () => {
    });

    it('weird cases', () => {
      const variables = {
        '': 6969,
        'var': '{name}',
      }
      expect(replaceVariables('this is a blank variable {}', variables))
        .to.eq('this is a blank variable {}');
      expect(replaceVariables('{var}', variables))
        .to.eq('{name}');
    });

  });
});
