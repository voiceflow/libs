import { BuiltinSlot } from '@voiceflow/common';

export enum SlotType {
  DATE = 'actions.type.Date',
  TIME = 'actions.type.Time',
  NUMBER = 'actions.type.Number',
  DATE_TIME = 'actions.type.DateTime',
}

export const BUILT_IN_SLOTS: BuiltinSlot<SlotType, never>[] = [
  {
    type: SlotType.DATE,
    label: 'Date',
    immutable: true,
  },
  {
    type: SlotType.DATE_TIME,
    label: 'DateTime',
    immutable: true,
  },
  {
    type: SlotType.TIME,
    label: 'Time',
    immutable: true,
  },
  {
    type: SlotType.NUMBER,
    label: 'Number',
    immutable: true,
  },
];
