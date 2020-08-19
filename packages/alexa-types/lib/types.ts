export type Prompt = {
  voice: Voice;
  content: string;
};

export enum Locale {
  EN_US = 'en-US',
  EN_AU = 'en-AU',
  EN_CA = 'en-CA',
  EN_IN = 'en-IN',
  EN_GB = 'en-GB',
  FR_CA = 'fr-CA',
  ES_US = 'es-US',
  FR_FR = 'fr-FR',
  DE_DE = 'de-DE',
  IT_IT = 'it-IT',
  JA_JP = 'ja-JP',
  ES_ES = 'es-ES',
  ES_MX = 'es-MX',
  PT_BR = 'pt-BR',
  HI_IN = 'hi-IN',
}

export enum Voice {
  ALEXA = 'Alexa',
  IVY = 'Ivy',
  JOANNA = 'Joanna',
  JOEY = 'Joey',
  JUSTIN = 'Justin',
  KENDRA = 'Kendra',
  KIMBERLY = 'Kimberly',
  MATTHEW = 'Matthew',
  SALLI = 'Salli',
  NICOLE = 'Nicole',
  RUSSELL = 'Russell',
  AMY = 'Amy',
  BRIAN = 'Brian',
  EMMA = 'Emma',
  ADITI = 'Aditi',
  RAVEENA = 'Raveena',
  HANS = 'Hans',
  MARLENE = 'Marlene',
  VICKI = 'Vicki',
  CONCHITA = 'Conchita',
  ENRIQUE = 'Enrique',
  CARLA = 'Carla',
  GIORGIO = 'Giorgio',
  MIZUKI = 'Mizuki',
  TAKUMI = 'Takumi',
  CELINE = 'Celine',
  LEA = 'Lea',
  MATHIEU = 'Mathieu',
  MIA = 'Mia',
  PENELOPE = 'Penelope',
  CHANTAL = 'Chantal',
  VITORIA = 'Vitoria',
  LUPE = 'Lupe',
  MIGUEL = 'Miguel',
  CRISTIANO = 'Cristiano',
  CAMILA = 'Camila',
  RICARDO = 'Ricardo',
  BIANCA = 'Bianca',
}

export const DEFAULT_Voice = {
  [Locale.DE_DE]: Voice.MARLENE,
  [Locale.EN_AU]: Voice.NICOLE,
  [Locale.EN_CA]: Voice.JOANNA,
  [Locale.EN_GB]: Voice.AMY,
  [Locale.EN_IN]: Voice.ADITI,
  [Locale.EN_US]: Voice.JOANNA,
  [Locale.ES_ES]: Voice.CONCHITA,
  [Locale.ES_MX]: Voice.MIA,
  [Locale.ES_US]: Voice.PENELOPE,
  [Locale.FR_CA]: Voice.CHANTAL,
  [Locale.FR_FR]: Voice.CELINE,
  [Locale.IT_IT]: Voice.CARLA,
  [Locale.JA_JP]: Voice.MIZUKI,
  [Locale.PT_BR]: Voice.VITORIA,
  [Locale.HI_IN]: Voice.ADITI,
};

export const REGIONAL_Voice = [
  {
    label: 'Default',
    options: [Voice.ALEXA],
  },
  {
    label: 'English US',
    options: [Voice.IVY, Voice.JOANNA, Voice.JOEY, Voice.JUSTIN, Voice.KENDRA, Voice.KIMBERLY, Voice.MATTHEW, Voice.SALLI],
  },
  {
    label: 'English AU',
    options: [Voice.NICOLE, Voice.RUSSELL],
  },
  {
    label: 'English GB',
    options: [Voice.AMY, Voice.BRIAN, Voice.EMMA],
  },
  {
    label: 'English IN',
    options: [Voice.ADITI, Voice.RAVEENA],
  },
  {
    label: 'German',
    options: [Voice.HANS, Voice.MARLENE, Voice.VICKI],
  },
  {
    label: 'Spanish',
    options: [Voice.CONCHITA, Voice.ENRIQUE, Voice.MIA, Voice.LUPE, Voice.MIGUEL, Voice.PENELOPE],
  },
  {
    label: 'Italian',
    options: [Voice.CARLA, Voice.GIORGIO, Voice.BIANCA],
  },
  {
    label: 'Japanese',
    options: [Voice.MIZUKI, Voice.TAKUMI],
  },
  {
    label: 'French',
    options: [Voice.CELINE, Voice.LEA, Voice.MATHIEU, Voice.CHANTAL],
  },
  {
    label: 'Portuguese',
    options: [Voice.VITORIA, Voice.CRISTIANO, Voice.CAMILA, Voice.RICARDO],
  },
];
