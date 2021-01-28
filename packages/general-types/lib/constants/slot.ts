import { Language } from '@/types';

export enum SlotType {
  CUSTOM = 'VF.CUSTOM',
  // Luis Slots - not associated yet
  // DATE = 'VF.DATE',
  // TIME = 'VF.TIME',
  NUMBER = 'VF.NUMBER',
  // COLOR = 'VF.COLOR',
  // COUNTRY = 'VF.COUNTRY',
  NAME = 'VF.NAME',
}

export type SlotTypeValue = { name: SlotType; label: string; values: Array<string>; regex?: string };

type ObjectKeys = {
  [key: string]: Array<SlotTypeValue>;
};

export const SlotTypes: ObjectKeys = {
  [Language.EN]: [
    {
      name: SlotType.NUMBER,
      label: 'Number',
      values: ['-43', '0', '35.5', '8', '520', '23599', '325', '15', '84730909029', '6947'],
    },
    {
      name: SlotType.NAME,
      label: 'Name',
      values: [
        'john',
        'james',
        'robert',
        'michael',
        'william',
        'david',
        'tyler',
        'roy',
        'andrew',
        'richard',
        'thomas',
        'daniel',
        'anthony',
        'mary',
        'jennifer',
        'emily',
        'susan',
        'valerie',
        'amanda',
        'sam',
      ],
    },
    // {
    //   name: SlotType.COLOR,
    //   label: 'Color',
    //   values: ['white', 'blue', 'green', 'black', 'brown', 'yellow', 'red', 'maroon', 'cyan', 'orange'],
    // },
  ],
  [Language.DE]: [
    {
      name: SlotType.NUMBER,
      label: 'Nummer',
      values: ['-43', '0', '35.5', '8', '520', '23599', '325', '15', '84730909029', '6947'],
    },
  ],
  [Language.FR]: [
    {
      name: SlotType.NUMBER,
      label: 'Nummer',
      values: ['-43', '0', '35.5', '8', '520', '23599', '325', '15', '84730909029', '6947'],
    },
  ],
  [Language.ES]: [
    {
      name: SlotType.NUMBER,
      label: 'Nummer',
      values: ['-43', '0', '35.5', '8', '520', '23599', '325', '15', '84730909029', '6947'],
    },
    // {
    //   name: SlotType.NAME,
    //   label: 'Nombre',
    //   values: [
    //     'alejandro',
    //     'xavier',
    //     'savannah',
    //     'santiago',
    //     'sofia',
    //     'camila',
    //     'mateo',
    //     'nicolas',
    //     'samuel',
    //     'valeria',
    //     'lucas',
    //     'diego',
    //     'juan',
    //     'isabella',
    //   ],
    // },
    // {
    //   name: SlotType.COLOR,
    //   label: 'Color',
    //   values: ['negro', 'blanco', 'rojo', 'azul', 'verde', 'marrón', 'verde', 'naranja', 'amarillo', 'cian', 'violeta'],
    // },
  ],
};
