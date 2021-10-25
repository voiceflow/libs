import { Language } from './base';

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
  PHONENUMBER = 'VF.PHONENUMBER',
  AGE = 'VF.AGE',
  PERCENTAGE = 'VF.PERCENTAGE',
  ORDINAL = 'VF.ORDINAL',
  CURRENCY = 'VF.CURRENCY',
  GEOGRAPHY = 'VF.GEOGRAPHY',
  URL = 'VF.URL',
}

interface SubList {
  canonicalForm: string;
  list: Array<string>;
}

export interface SlotTypeValue {
  name: SlotType;
  label: string;
  values: Array<string>;
  regex?: string;
  list?: Array<SubList>;
}

type ObjectKeys = Record<string, Array<SlotTypeValue>>;

const EMAIL: SlotTypeValue = {
  name: SlotType.EMAIL,
  label: 'Email',
  values: ['user@voiceflow.com', 'professor@utoronto.edu', 'person_name@gmail.com', 'username123.signature@hotmail.com', 'researcher@charity.org'],
  regex: '^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
};

const PHONENUMBER: SlotTypeValue = {
  name: SlotType.PHONENUMBER,
  label: 'Phone Number',
  values: ['1 (800) 642-7676', '123-456-7890', '647 126 3928', '360 392-1293', '906-459-2349', '2018073710', '4791945491'],
};

const NUMBER = (label: string): SlotTypeValue => ({
  name: SlotType.NUMBER,
  label,
  values: ['-43', '0', '35.5', '8', '520', '23599', '325', '15', '84730909029', '6947'],
});

const PERCENTAGE = (label: string): SlotTypeValue => ({
  name: SlotType.PERCENTAGE,
  label,
  values: ['3 1/2', '2%'],
});

const ORDINAL = (label: string): SlotTypeValue => ({
  name: SlotType.ORDINAL,
  label,
  values: ['first', 'second', 'third', 'next', 'last', 'previous'],
});

const URL = (label: string): SlotTypeValue => ({
  name: SlotType.URL,
  label,
  values: ['https://www.luis.ai'],
});

export const SlotTypes: ObjectKeys = {
  [Language.EN]: [
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
    {
      name: SlotType.GEOGRAPHY,
      label: 'Geography',
      values: ['the sphinx', 'gizah', 'egypt', 'africa', 'texas'],
    },
    EMAIL,
    PHONENUMBER,
    NUMBER('Number'),
    PERCENTAGE('Percentage'),
    ORDINAL('Ordinal'),
    URL('URL'),
    {
      name: SlotType.NATOAPCO,
      label: 'NATO/APCO',
      values: [],
      list: [
        { canonicalForm: 'Alfa', list: ['Adam', 'Alpha'] },
        { canonicalForm: 'Bravo', list: ['Boy', 'Baker'] },
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
    {
      name: SlotType.AGE,
      label: 'Age',
      values: ['20 days old', 'nineteen years old', '4 weeks old', '8 months old', '45 years-old', 'one month old'],
    },
    {
      name: SlotType.CURRENCY,
      label: 'Currency',
      values: [
        '5 dollars',
        '1 dollar',
        'one dollar',
        '$8',
        '6 canadian dollars',
        'seven pennies',
        '9 pounds',
        '15 pesos',
        'Four para',
        '87 ruples',
        'thirty rupees',
        '£12.34',
        '34.2$',
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
    PHONENUMBER,
    {
      name: SlotType.AGE,
      label: 'Alter',
      values: ['7 Jahre alt', 'acht Mondate alt', '3 wochen alt', 'neun Tage alt', 'einen tag alt', '1 Jahr alt'],
    },
    NUMBER('Nummer'),
    PERCENTAGE('Prozentsatz'),
    ORDINAL('Ordinalzahl'),
    URL('URL'),
    {
      name: SlotType.CURRENCY,
      label: 'Währung',
      values: ['7 $', '23 Dollar', 'dreißig USD', '87 yuan', '11 pfund', '55£', '£5.99', 'neunzehn Pesos'],
    },
  ],
  [Language.FR]: [
    {
      name: SlotType.NAME,
      label: 'Name',
      values: ['Martin', 'Thomas', 'Jacques', 'Jean', 'Pierre', 'Marie', 'Nicolas', 'Emma', 'Louise', 'Alice', 'Hugo', 'Liam', 'Mohamed', 'Lea'],
    },
    EMAIL,
    PHONENUMBER,
    {
      name: SlotType.AGE,
      label: 'Âge',
      values: [
        '3 ans',
        'Trois ans',
        "2 mois d'âge",
        "six mois d'age",
        '8 mois',
        'huit mois',
        'une semaine',
        '1 semaine',
        '3 semaines',
        "sept semaines d'âge",
        "9 semaines d'age",
        '18 jours',
        'quarante jours',
        'un jour',
      ],
    },
    NUMBER('Nombre'),
    PERCENTAGE('Pourcentage'),
    ORDINAL('Nombre ordinal'),
    URL('URL'),
    {
      name: SlotType.CURRENCY,
      label: 'Monnaie',
      values: ['un dollar', '3 dollars', '5$', '£12.09', '33 pence', 'Sept sou', '6 livres', 'douze pesos', 'trois francs', '7 dollars canadien'],
    },
  ],
  [Language.PT]: [
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
    PHONENUMBER,
    {
      name: SlotType.AGE,
      label: 'Idade',
      values: [
        '3 anos',
        '3 anos de idade',
        '1 ano',
        'uma ano',
        '6 meses',
        '1 mes',
        'um mês',
        '7 semanas',
        'uma semana',
        '1 semana',
        'quatro dias',
        '15 dias',
        '1 dia',
      ],
    },
    NUMBER('Número'),
    PERCENTAGE('Porcentagem'),
    ORDINAL('Número ordinal'),
    URL('URL'),
    {
      name: SlotType.CURRENCY,
      label: 'Monnaie',
      values: ['1 dólar', 'quatro pesos', '€6.01', '5€', '11.02 francos'],
    },
  ],
  [Language.ES]: [
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
    PHONENUMBER,
    {
      name: SlotType.AGE,
      label: 'Edad',
      values: [
        '3 años',
        '1 año',
        'un año',
        '6 meses',
        '6 meses de edad',
        '1 mes',
        'um mês',
        '7 semanas',
        'un semana',
        '1 semana',
        'quatro dias',
        '15 días',
        '1 dia de edad',
        'un día',
      ],
    },
    NUMBER('Número'),
    PERCENTAGE('Porcentaje'),
    ORDINAL('Número ordinal'),
    URL('URL'),
    {
      name: SlotType.CURRENCY,
      label: 'Moneda',
      values: ['5 dólares', '1 peso', '3.2 libras', 'Tres rublos', '1 peso dominicano', '4.5 dólares canadienses', '3.5€', '€9', 'tres euros'],
    },
    // {
    //   name: SlotType.COLOR,
    //   label: 'Color',
    //   values: ['negro', 'blanco', 'rojo', 'azul', 'verde', 'marrón', 'verde', 'naranja', 'amarillo', 'cian', 'violeta'],
    // },
  ],
  [Language.ZH]: [
    EMAIL,
    PHONENUMBER,
    {
      name: SlotType.AGE,
      label: '岁',
      values: ['一岁', '3岁', '5周岁', '7个月大', '9月大', '8周大', '21天大', '1天大'],
    },
    NUMBER('数字'),
    PERCENTAGE('百分比'),
    ORDINAL('序数词'),
    URL('网址'),
    {
      name: SlotType.CURRENCY,
      label: '貨幣',
      values: ['5 欧元', '1比索', '9便士', '八便士', '8 美元', '8加元', '12 人民币'],
    },
  ],
  [Language.JA]: [
    EMAIL,
    PHONENUMBER,
    {
      name: SlotType.AGE,
      label: '歳',
      values: ['1歳', '一歳', '2歳', '4ヶ月', '3週間', '6週', '5日間', '9日齢', '10日大'],
    },
    NUMBER('数'),
    PERCENTAGE('パーセンテージ'),
    ORDINAL('序数'),
    URL('URL'),
    {
      name: SlotType.CURRENCY,
      label: '通貨',
      values: ['88ドル', '123人民元', '7ペンス', '87ペソ', '5カナダ・ドル', '44シリング'],
    },
  ],
  [Language.NL]: [
    EMAIL,
    PHONENUMBER,
    {
      name: SlotType.AGE,
      label: 'Leeftijd',
      values: [
        'twintig jaar oud',
        '19 dagen old',
        'negentien dagen oud',
        '4 week oud',
        '8 maand oud',
        '1 jaar oud',
        '3 jaar',
        '4 levensjaren',
        '30 jarige leeftijd',
        '45-jarige leeftijd',
        '2-jarige',
        '5 jarige',
        '6 maand oud',
        'twee maanden',
        'vier weken oud',
        '5 week',
        'zeven weken',
        '6 dag oud',
        '7 dag',
        'negen dagen',
      ],
    },
    NUMBER('Aantal'),
    PERCENTAGE('Percentage'),
    ORDINAL('Rangtelwoord'),
    URL('URL'),
    {
      name: SlotType.CURRENCY,
      label: 'Valuta',
      values: ['8 euro', 'negen cent', '4 japanse yen', 'vier pesos', '11 centen', '33 pence', '5 dollar', '0.12 bitcoin', 'drieëntwintig pond'],
    },
  ],
  [Language.IT]: [
    EMAIL,
    PHONENUMBER,
    {
      name: SlotType.AGE,
      label: 'Età',
      values: [
        '8 anni di età',
        'sette anni',
        'un anno di età',
        "11 anni d'età",
        "1 anno d'età",
        "di nove anni d'età",
        '4 anni',
        '1 anno',
        '8 mesi di età',
        'sette mesi',
        'un mese di età',
        "11 mesi d'età",
        "1 mese d'età",
        "di nove mesi d'età",
        '1 mese',
        '8 settimane di età',
        'sette settimane',
        'un settimana di età',
        "11 settimane d'età",
        "1 settimana d'età",
        "di nove settimane d'età",
        '1 settimana',
        '8 giorni di età',
        'sette giorni',
        'un giorno di età',
        "11 giorni d'età",
        "1 giorno d'età",
        "di nove giorni d'età",
        '1 giorno',
      ],
    },
    NUMBER('Numero'),
    PERCENTAGE('Percentuale'),
    ORDINAL('Numero ordinale'),
    URL('URL'),
    {
      name: SlotType.CURRENCY,
      label: 'Valuta',
      values: ['5 dollari', '9.10 dollari canadesi', '6 sterline', '$4.1', 'quattro pence', '24 pesos', '84 £', '£99.12'],
    },
  ],
  [Language.KO]: [EMAIL, PHONENUMBER, URL('URL')],
};
