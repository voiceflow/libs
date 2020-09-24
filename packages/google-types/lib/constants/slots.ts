export enum SlotType {
  DATE = 'actions.type.Date',
  DATE_TIME = 'actions.type.DateTime',
  TIME = 'actions.type.Time',
  NUMBER = 'actions.type.Number',
}

export const SlotData = [
  { label: 'Custom', type: null, locales: {} },
  {
    label: 'Date',
    type: SlotType.DATE,
    immutable: true,
  },
  {
    label: 'DateTime',
    type: SlotType.DATE_TIME,
    immutable: true,
  },
  {
    label: 'Time',
    type: SlotType.TIME,
    immutable: true,
  },
  {
    label: 'Number',
    type: SlotType.NUMBER,
    immutable: true,
  },
];
