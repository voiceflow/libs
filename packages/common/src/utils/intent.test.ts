import * as data from './__fixtures__/name.json';
import { injectUtteranceSpaces, utteranceEntityPermutations } from './intent';

describe('utteranceEntityPermutations unit tests', () => {
  it('works correctly', async () => {
    const utterances = data.intents[0].inputs.map(({ text }) => text);
    const entitiesByID = Object.fromEntries(data.slots.map((slot) => [slot.key, slot])) as Record<string, { inputs: string[]; name: string }>;
    const key = '4i3h3mmi';

    const luisUtterances = utteranceEntityPermutations({ utterances, entitiesByID });

    expect(luisUtterances.length).toBe(Math.min(entitiesByID[key].inputs.length, 22));

    // Check that each slot value is within one of the utterances
    entitiesByID[key].inputs.forEach((input, i) => {
      if (i < 22) {
        expect(luisUtterances.filter((utt) => utt.text?.includes(input)).length).toBeGreaterThan(0);
      }
    });

    // Check that a fake name is not within the utterances
    expect(luisUtterances.filter((utt) => utt.text?.includes('fakeName')).length).toBe(0);
  });

  it('with replacer', async () => {
    const utterances = [
      '{{[slot].4i3h3mmi}} testing {{[slotmans].4i3h3mmi}} {{[third].third}}',
      'close {{[slotmans].4i3h3mmi}}{{[third].third}} together',
    ];

    const entitiesByID: Record<string, { inputs: string[]; name: string }> = {
      '4i3h3mmi': { name: 'slotmans', inputs: ['value1', 'value_super_long', 'v3'] },
      third: { name: 'third', inputs: ['thirdvalue'] },
    };

    // this generates the rasa format
    const replacer = (sample: string, entityID: string) => {
      return `[${sample}](${entitiesByID[entityID].name})`;
    };

    const replacedUtterances = utteranceEntityPermutations({ utterances, entitiesByID, replacer });

    expect(replacedUtterances.map(({ text }) => text)).toEqual([
      '[value1](slotmans) testing [value_super_long](slotmans) [thirdvalue](third)',
      'close [v3](slotmans)[thirdvalue](third) together',
    ]);
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
      expect(injectUtteranceSpaces(testUtterances[i])).toBe(expectedResults[i]);
    }
  });
});
