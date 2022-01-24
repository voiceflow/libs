import { expect } from 'chai';

import { injectUtteranceSpaces, utteranceEntityPermutations } from '@/utils/intent';

import * as data from '../fixtures/name.json';

const utterances = data.intents[0].inputs.map(({ text }) => text);
const entities = Object.fromEntries(data.slots.map((slot) => [slot.key, slot]));
const key = '4i3h3mmi';

describe('utteranceEntityPermutations unit tests', () => {
  it('works correctly', async () => {
    const luisUtterances = utteranceEntityPermutations(utterances, entities);

    expect(luisUtterances.length).to.eql(Math.min(entities[key].inputs.length, 22));

    // Check that each slot value is within one of the utterances
    entities[key].inputs.forEach((input, i) => {
      if (i < 22) {
        expect(luisUtterances.filter((utt) => utt.text?.includes(input)).length).to.be.greaterThan(0);
      }
    });

    // Check that a fake name is not within the utterances
    expect(luisUtterances.filter((utt) => utt.text?.includes('fakeName')).length).to.eql(0);
  });
});

describe('injectUtteranceSpaces', () => {
  const testUtterances = [
    '',
    '{{[slot].4i3h3mmi}}',
    '{{[slot].4i3h3mmi}}{{[slotmans].4i3h3mmi}}',
    'hello there {{[slotmans].4i3h3mma}}',
    'hello there {{[slotmans].4i3h3mmb}} words',
    'hello there{{[slotmans].4i3h3mmc}} words',
    'hello there {{[slotmans].4i3h3mmd}}words',
    'hello there{{[slotmans].4i3h3mme}}words',
    'hello there {{[slotmans].4i3h3mmf}}, words',
    'hello there:{{[slotmans].4i3h3mmg}},words',
    '{{[slot].4i3h3mmi}}and{{[third].third}}',
    '{{[slot].4i3h3mmi}}{{[slotmans].4i3h3mmi}}{{[third].third}}',
    'multiple{{[slotmans].4i3h3mmi}}slots{{[slotmans].4i3h3mmi}}words{{[slotmans].4i3h3mmi}}',
  ];
  const expectedResults = [
    '',
    '{{[slot].4i3h3mmi}}',
    '{{[slot].4i3h3mmi}} {{[slotmans].4i3h3mmi}}',
    'hello there {{[slotmans].4i3h3mma}}',
    'hello there {{[slotmans].4i3h3mmb}} words',
    'hello there {{[slotmans].4i3h3mmc}} words',
    'hello there {{[slotmans].4i3h3mmd}} words',
    'hello there {{[slotmans].4i3h3mme}} words',
    'hello there {{[slotmans].4i3h3mmf}}, words',
    'hello there:{{[slotmans].4i3h3mmg}},words',
    '{{[slot].4i3h3mmi}} and {{[third].third}}',
    '{{[slot].4i3h3mmi}} {{[slotmans].4i3h3mmi}} {{[third].third}}',
    'multiple {{[slotmans].4i3h3mmi}} slots {{[slotmans].4i3h3mmi}} words {{[slotmans].4i3h3mmi}}',
  ];
  it('add spaces around slots if needed', () => {
    for (let i = 0; i < testUtterances.length; ++i) {
      expect(injectUtteranceSpaces(testUtterances[i])).to.eql(expectedResults[i]);
    }
  });
});
