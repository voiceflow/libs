export type BuiltinSlot<T extends string, L extends string = string> = {
  type: T;
  label: string;
  locales?: L[];
  immutable?: boolean;
};

export const CUSTOM_SLOT_TYPE = 'Custom';
export const LOWER_CASE_CUSTOM_SLOT_TYPE = CUSTOM_SLOT_TYPE.toLowerCase();

export const CustomSlot: BuiltinSlot<string> = {
  type: CUSTOM_SLOT_TYPE,
  label: CUSTOM_SLOT_TYPE,
};
