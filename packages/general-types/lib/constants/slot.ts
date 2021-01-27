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
      values: ['-1', '0', '3.5', '4', '500', '23599', '-52', '15'],
    },
    // {
    //   name: SlotType.COLOR,
    //   label: 'Color',
    //   values: ['white', 'blue', 'green', 'black', 'brown', 'yellow', 'red', 'maroon', 'cyan', 'orange'],
    // },
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
  ],
  [Language.ES]: [
    // {
    //   name: SlotType.COLOR,
    //   label: 'Color',
    //   values: ['negro', 'blanco', 'rojo', 'azul', 'verde', 'marrón', 'verde', 'naranja', 'amarillo', 'cian', 'violeta'],
    // },
    {
      name: SlotType.NAME,
      label: 'Nombre',
      values: ['alejandro', 'xavier', 'savannah', 'santiago', 'sofia', 'camila', 'mateo', 'nicolas', 'samuel', 'valeria', 'lucas', 'diego', 'juan'],
    },
  ],
  // [Language.RU]: [
  //   {
  //     name: SlotType.COLOR,
  //     label: 'Цвет',
  //     values: ['белый', 'голубой', 'зеленый'],
  //   },
  //   {
  //     name: SlotType.FOODSIZE,
  //     label: 'Размер порции',
  //     values: ['маленькая', 'средняя', 'большая'],
  //   },
  // ],
};
