import { BuiltinSlot, LOWER_CASE_CUSTOM_SLOT_TYPE, SLOT_REGEXP, SPACE_REGEXP } from '@/constants';

export const formatIntentName = (name: string): string => {
  if (!name) {
    return name;
  }

  let formattedName = '';
  // replace white spaces with underscores
  formattedName = name.replace(SPACE_REGEXP, '_');
  // replace numbers with equivalent capital letter. Ex: 0 = A, 1 = B
  formattedName = formattedName.replace(/\d/g, (digit) => String.fromCharCode(parseInt(digit, 10) + 65));

  return formattedName;
};

export const getUtterancesWithSlotNames = ({
  slots = [],
  utterances = [],
}: {
  slots?: { key: string; name: string }[];
  utterances?: { text: string }[];
}): string[] =>
  utterances
    .filter((utterance) => !!utterance.text?.trim())
    .map(({ text }) =>
      text.replace(SLOT_REGEXP, (substring, _name: string, key: string) => {
        const slot = slots.find((_slot) => _slot.key === key);

        return slot?.name ? `{${slot.name}}` : substring;
      })
    );

export const getSlotType = (slots: BuiltinSlot<string, string>[], slot: { name: string; type: { value?: string } }): string => {
  let type = slot.name;
  const lowerCaseType = slot.type.value?.toLowerCase() ?? '';

  if (!!slot.type.value && lowerCaseType !== LOWER_CASE_CUSTOM_SLOT_TYPE) {
    const builtinSlot = slots.find((_slot) => _slot.label.toLowerCase() === lowerCaseType);

    if (!builtinSlot) {
      type = slot.type.value; // Platform specific slot
    } else {
      ({ type } = builtinSlot);
    }
  }

  return type;
};
