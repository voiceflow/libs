export type SlotInput = {
  id: string;
  value: string;
  synonyms: string;
};

export type Slot = {
  key: string;
  name: string;
  type?: string;
  color?: string;
  inputs: string[];
};
