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
  EMAIL = 'VF.EMAIL',
}

export type SlotTypeValue = { name: SlotType; label: string; values: Array<string>; regex?: string };

type ObjectKeys = {
  [key: string]: Array<SlotTypeValue>;
};

const NUMBERS = ['-43', '0', '35.5', '8', '520', '23599', '325', '15', '84730909029', '6947'];

const EMAIL: SlotTypeValue = {
  name: SlotType.EMAIL,
  label: 'Email',
  values: ['user@voiceflow.com', 'professor@utoronto.edu', 'person_name@gmail.com', 'username123.signature@hotmail.com', 'researcher@charity.org'],
  regex: '^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
};

export const SlotTypes: ObjectKeys = {
  [Language.EN]: [
    {
      name: SlotType.NUMBER,
      label: 'Number',
      values: NUMBERS,
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
    EMAIL,
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
      values: NUMBERS,
    },
    {
      name: SlotType.NAME,
      label: 'Name',
      values: [
        'Schmidt',
        'Müller',
        'Daniel',
        'Michael',
        'Lucas',
        'Michelle',
        'Laura',
        'Lisa',
        'Christina',
        'Sabrina',
        'Julia',
        'Alexander',
        'Hans',
        'Nicole',
      ],
    },
    EMAIL,
  ],
  [Language.FR]: [
    {
      name: SlotType.NUMBER,
      label: 'Nombre',
      values: NUMBERS,
    },
    {
      name: SlotType.NAME,
      label: 'Name',
      values: ['Martin', 'Thomas', 'Jacques', 'Jean', 'Pierre', 'Marie', 'Nicolas', 'Emma', 'Louise', 'Alice', 'Hugo', 'Liam', 'Mohamed', 'Lea'],
    },
    EMAIL,
  ],
  [Language.PT]: [
    {
      name: SlotType.NUMBER,
      label: 'Número',
      values: NUMBERS,
    },
    {
      name: SlotType.NAME,
      label: 'Nombre',
      values: [
        'alejandro',
        'xavier',
        'savannah',
        'santiago',
        'sofia',
        'camila',
        'mateo',
        'nicolas',
        'samuel',
        'valeria',
        'lucas',
        'diego',
        'juan',
        'isabella',
      ],
    },
    EMAIL,
  ],
  [Language.ES]: [
    {
      name: SlotType.NUMBER,
      label: 'Número',
      values: NUMBERS,
    },
    {
      name: SlotType.NAME,
      label: 'Nombre',
      values: [
        'alejandro',
        'xavier',
        'savannah',
        'santiago',
        'sofia',
        'camila',
        'mateo',
        'nicolas',
        'samuel',
        'valeria',
        'lucas',
        'diego',
        'juan',
        'isabella',
      ],
    },
    EMAIL,
    // {
    //   name: SlotType.COLOR,
    //   label: 'Color',
    //   values: ['negro', 'blanco', 'rojo', 'azul', 'verde', 'marrón', 'verde', 'naranja', 'amarillo', 'cian', 'violeta'],
    // },
  ],
  [Language.ZH]: [
    {
      name: SlotType.NUMBER,
      label: '数字',
      values: NUMBERS,
    },
    EMAIL,
  ],
  [Language.JA]: [
    {
      name: SlotType.NUMBER,
      label: '数',
      values: NUMBERS,
    },
    EMAIL,
  ],
};
