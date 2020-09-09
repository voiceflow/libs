export type SlotInput = {
  id: string;
  value: string;
  synonyms: string;
};

export type Slot = {
  key: string;
  name: string;
  type: { value?: string };
  color?: string;
  inputs: string[];
};

export type SlotMapping = {
  slot: string | null;
  variable: string | null;
};
