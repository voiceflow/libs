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
  NATOAPCO = 'VF.NATOAPCO',
}

type SubList = {
  canonicalForm: string;
  list: Array<string>;
};

export type SlotTypeValue = { name: SlotType; label: string; values: Array<string>; regex?: string; list?: Array<SubList> };

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
    {
      name: SlotType.NATOAPCO,
      label: 'NatoApco',
      values: [],
      list: [
        { canonicalForm: 'Alfa', list: ['Adam', 'Alpha'] },
        { canonicalForm: 'Bravo', list: ['Boy', 'Baåker'] },
        { canonicalForm: 'Charlie', list: ['Charles'] },
        { canonicalForm: 'Delta', list: ['David'] },
        { canonicalForm: 'Echo', list: ['Edward', 'Easy'] },
        { canonicalForm: 'Foxtrot', list: ['Frank'] },
        { canonicalForm: 'Golf', list: ['George'] },
        { canonicalForm: 'Hotel', list: ['Henry'] },
        { canonicalForm: 'India', list: ['Ida'] },
        { canonicalForm: 'Juliett', list: ['John'] },
        { canonicalForm: 'Kilo', list: ['King'] },
        { canonicalForm: 'Lima', list: ['Lincoln'] },
        { canonicalForm: 'Mike', list: ['Mary'] },
        { canonicalForm: 'November', list: ['Nora'] },
        { canonicalForm: 'Oscar', list: ['Ocean'] },
        { canonicalForm: 'Papa', list: ['Paul'] },
        { canonicalForm: 'Quebec', list: ['Queen'] },
        { canonicalForm: 'Romeo', list: ['Robert'] },
        { canonicalForm: 'Sierra', list: ['Sam'] },
        { canonicalForm: 'Tango', list: ['Tom'] },
        { canonicalForm: 'Uniform', list: ['Union'] },
        { canonicalForm: 'Victor', list: [] },
        { canonicalForm: 'Whiskey', list: ['William'] },
        { canonicalForm: 'X-ray', list: ['Xray'] },
        { canonicalForm: 'Yankee', list: ['Young', 'Yellow'] },
        { canonicalForm: 'Zulu', list: ['Zebra'] },
        { canonicalForm: '0', list: ['Zero', 'Nadazero'] },
        { canonicalForm: '1', list: ['One', 'Wun', 'Unaone'] },
        { canonicalForm: '2', list: ['Two', 'Too', 'Bissotwo'] },
        { canonicalForm: '3', list: ['Three', 'Tree', 'Terrathree'] },
        { canonicalForm: '4', list: ['Four', 'Fower', 'Kartefour'] },
        { canonicalForm: '5', list: ['Five', 'Fife', 'Pantafive'] },
        { canonicalForm: '6', list: ['Six', 'Soxisix'] },
        { canonicalForm: '7', list: ['Seven', 'Setteseven'] },
        { canonicalForm: '8', list: ['Eight', 'Oktoeight'] },
        { canonicalForm: '9', list: ['Nine', 'Niner', 'Novenine'] },
        { canonicalForm: '00', list: ['Hundred'] },
        { canonicalForm: '000', list: ['Thousand'] },
        { canonicalForm: '-', list: ['Dash', 'Hyphen'] },
        { canonicalForm: '.', list: ['Decimal', 'Point', 'Stop'] },
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
