import { BuiltinSlot } from '@voiceflow/common';

// gactions
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

// dialogflow es

// https://cloud.google.com/dialogflow/es/docs/reference/system-entities
// deprecated entities have NOT been included in the ENUM
export enum DFESSlotType {
  DATE_TIME = '@sys.date-time',
  DATE = '@sys.date',
  DATE_PERIOD = '@sys.date-period',
  TIME = '@sys.time',
  TIME_PERIOD = '@sys.time-period',
  NUMBER = '@sys.number',
  CARDINAL = '@sys.cardinal',
  ORDINAL = '@sys.ordinal',
  NUMBER_INTEGER = '@sys.number-integer',
  NUMBER_SEQUENCE = '@sys.number-sequence',
  FLIGHT_NUMBER = '@sys.flight-number',
  UNIT_AREA = '@sys.unit-area',
  UNIT_CURRENCY = '@sys.unit-currency',
  UNIT_LENGTH = '@sys.unit-length',
  UNIT_SPEED = '@sys.unit-speed',
  UNIT_VOLUME = '@sys.unit-volume',
  UNIT_WEIGHT = '@sys.unit-weight',
  UNIT_INFORMATION = '@sys.unit-information',
  PERCENTAGE = '@sys.percentage',
  TEMPERATURE = '@sys.temperature',
  DURATION = '@sys.duration',
  AGE = '@sys.age',
  CURRENCY_NAME = '@sys.currency-name',
  UNIT_AREA_NAME = '@sys.unit-area-name',
  UNIT_LENGTH_NAME = '@sys.unit-length-name',
  UNIT_SPEED_NAME = '@sys.unit-speed-name',
  UNIT_VOLUME_NAME = '@sys.unit-volume-name',
  UNIT_WEIGHT_NAME = '@sys.unit-weight-name',
  UNIT_INFORMATION_NAME = '@sys.unit-information-name',
  ADDRESS = '@sys.address',
  ZIP_CODE = '@sys.zip-code',
  GEO_CAPITAL = '@sys.geo-capital',
  GEO_COUNTRY = '@sys.geo-country',
  GEO_COUNTRY_CODE = '@sys.geo-country-code',
  GEO_CITY = '@sys.geo-city',
  GEO_STATE = '@sys.geo-state',
  PLACE_ATTRACTION = '@sys.place-attraction',
  AIRPORT = '@sys.airport',
  LOCATION = '@sys.location',
  EMAIL = '@sys.email',
  PHONE_NUMBER = '@sys.phone-number',
  PERSON = '@sys.person',
  MUSIC_ARTIST = '@sys.music-artist',
  MUSIC_GENRE = '@sys.music-genre',
  COLOR = '@sys.color',
  LANGUAGE = '@sys.language',
  ANY = '@sys.any',
  URL = '@sys.url',
}

export const DFES_BUILT_IN_SLOTS: BuiltinSlot<DFESSlotType, never>[] = [
  {
    type: DFESSlotType.DATE_TIME,
    label: 'DateTime',
    immutable: true,
  },
  {
    type: DFESSlotType.DATE,
    label: 'Date',
    immutable: true,
  },
  {
    type: DFESSlotType.DATE_PERIOD,
    label: 'DatePeriod',
    immutable: true,
  },
  {
    type: DFESSlotType.TIME,
    label: 'Time',
    immutable: true,
  },
  {
    type: DFESSlotType.TIME_PERIOD,
    label: 'TimePeriod',
    immutable: true,
  },
  {
    type: DFESSlotType.NUMBER,
    label: 'Number',
    immutable: true,
  },
  {
    type: DFESSlotType.CARDINAL,
    label: 'Cardinal',
    immutable: true,
  },
  {
    type: DFESSlotType.ORDINAL,
    label: 'Ordinal',
    immutable: true,
  },
  {
    type: DFESSlotType.NUMBER_INTEGER,
    label: 'NumberInteger',
    immutable: true,
  },
  {
    type: DFESSlotType.NUMBER_SEQUENCE,
    label: 'NumberSequence',
    immutable: true,
  },
  {
    type: DFESSlotType.FLIGHT_NUMBER,
    label: 'FlightNumber',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_AREA,
    label: 'UnitArea',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_CURRENCY,
    label: 'UnitCurrency',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_LENGTH,
    label: 'UnitLength',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_SPEED,
    label: 'UnitSpeed',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_VOLUME,
    label: 'UnitVolume',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_WEIGHT,
    label: 'UnitWeight',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_INFORMATION,
    label: 'UnitInformation',
    immutable: true,
  },
  {
    type: DFESSlotType.PERCENTAGE,
    label: 'Percentage',
    immutable: true,
  },
  {
    type: DFESSlotType.TEMPERATURE,
    label: 'Temperature',
    immutable: true,
  },
  {
    type: DFESSlotType.DURATION,
    label: 'Duration',
    immutable: true,
  },
  {
    type: DFESSlotType.AGE,
    label: 'Age',
    immutable: true,
  },
  {
    type: DFESSlotType.CURRENCY_NAME,
    label: 'CurrencyName',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_AREA_NAME,
    label: 'UnitAreaName',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_LENGTH_NAME,
    label: 'UnitLengthName',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_SPEED_NAME,
    label: 'UnitSpeedName',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_VOLUME_NAME,
    label: 'UnitVolumeName',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_WEIGHT_NAME,
    label: 'UnitWeightName',
    immutable: true,
  },
  {
    type: DFESSlotType.UNIT_INFORMATION_NAME,
    label: 'UnitInformationName',
    immutable: true,
  },
  {
    type: DFESSlotType.ADDRESS,
    label: 'Address',
    immutable: true,
  },
  {
    type: DFESSlotType.ZIP_CODE,
    label: 'ZipCode',
    immutable: true,
  },
  {
    type: DFESSlotType.GEO_CAPITAL,
    label: 'GeoCapital',
    immutable: true,
  },
  {
    type: DFESSlotType.GEO_COUNTRY,
    label: 'GeoCountry',
    immutable: true,
  },
  {
    type: DFESSlotType.GEO_COUNTRY_CODE,
    label: 'GeoCountryCode',
    immutable: true,
  },
  {
    type: DFESSlotType.GEO_CITY,
    label: 'GeoCity',
    immutable: true,
  },
  {
    type: DFESSlotType.GEO_STATE,
    label: 'GeoState',
    immutable: true,
  },
  {
    type: DFESSlotType.PLACE_ATTRACTION,
    label: 'PlaceAttraction',
    immutable: true,
  },
  {
    type: DFESSlotType.AIRPORT,
    label: 'Airport',
    immutable: true,
  },
  {
    type: DFESSlotType.LOCATION,
    label: 'Location',
    immutable: true,
  },
  {
    type: DFESSlotType.EMAIL,
    label: 'Email',
    immutable: true,
  },
  {
    type: DFESSlotType.PHONE_NUMBER,
    label: 'PhoneNumber',
    immutable: true,
  },
  {
    type: DFESSlotType.PERSON,
    label: 'Person',
    immutable: true,
  },
  {
    type: DFESSlotType.MUSIC_ARTIST,
    label: 'MusicArtist',
    immutable: true,
  },
  {
    type: DFESSlotType.MUSIC_GENRE,
    label: 'MusicGenre',
    immutable: true,
  },
  {
    type: DFESSlotType.COLOR,
    label: 'Color',
    immutable: true,
  },
  {
    type: DFESSlotType.LANGUAGE,
    label: 'Language',
    immutable: true,
  },
  {
    type: DFESSlotType.ANY,
    label: 'Any',
    immutable: true,
  },
  {
    type: DFESSlotType.URL,
    label: 'URL',
    immutable: true,
  },
];
