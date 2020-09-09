import { Locale as L } from '../types';

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
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'DateTime',
    type: SlotType.DATE_TIME,
    immutable: true,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Time',
    type: SlotType.TIME,
    immutable: true,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
  {
    label: 'Number',
    type: SlotType.NUMBER,
    immutable: true,
    locales: [L.DE_DE, L.EN_US, L.EN_CA, L.PT_BR, L.EN_IN, L.HI_IN, L.ES_ES, L.FR_CA, L.ES_MX, L.IT_IT, L.EN_AU, L.ES_US, L.FR_FR, L.EN_GB, L.JA_JP],
  },
];
