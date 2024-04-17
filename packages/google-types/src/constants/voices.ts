import { Language, Locale, VoiceLanguageCode } from './locales';

export enum VoiceType {
  STANDARD = 'standard',
  WAVENET = 'wavenet',
  NEURAL2 = 'neural2',
}

export enum SSMLGender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum Profile {
  SPEAKERS = 'speakers',
  HEADPHONES = 'headphones',
  AUDIO_SYSTEMS = 'audioSystems',
}

export enum VoiceLanguage {
  ARABIC = 'Arabic',
  BENGALI_INDIA = 'Bengali (India)',
  CHINESE_HONG_KONG = 'Chinese (Hong Kong)',
  CHINESE_TAIWAN = 'Chinese (Taiwan)',
  CZECH_CZECH_REPUBLIC = 'Czech (Czech Republic)',
  DANISH_DENMARK = 'Danish (Denmark)',
  DUTCH = 'Dutch',
  DUTCH_NETHERLANDS = 'Dutch (Netherlands)',
  DUTCH_BELGIUM = 'Dutch (Belgium)',
  ENGLISH_AUSTRALIA = 'English (Australia)',
  ENGLISH_CANADA = 'English (Canada)',
  ENGLISH_INDIA = 'English (India)',
  ENGLISH_BELGIUM = 'English (Belgium)',
  ENGLISH_SINGAPORE = 'English (Singapore)',
  ENGLISH_UK = 'English (UK)',
  ENGLISH_US = 'English (US)',
  FILIPINO_PHILIPPINES = 'Filipino (Philippines)',
  FINNISH_FINLAND = 'Finnish (Finland)',
  FRENCH_CANADA = 'French (Canada)',
  FRENCH_FRANCE = 'French (France)',
  FRENCH_BELGIUM = 'French (Belgium)',
  GERMAN_GERMANY = 'German (Germany)',
  GERMAN_AUSTRIA = 'German (Austria)',
  GERMAN_SWITZERLAND = 'German (Switzerland)',
  GERMAN_BELGIUM = 'German (Belgium)',
  GREEK_GREECE = 'Greek (Greece)',
  GUJARATI_INDIA = 'Gujarati (India)',
  HINDI_INDIA = 'Hindi (India)',
  HUNGARIAN_HUNGARY = 'Hungarian (Hungary)',
  INDONASIAN_INDONESIA = 'Indonesian (Indonesia)',
  ITALIAN_ITALY = 'Italian (Italy)',
  JAPANESE_JAPAN = 'Japanese (Japan)',
  KANNADA_INDIA = 'Kannada (India)',
  KOREAN_SOUTH_KOREA = 'Korean (South Korea)',
  MALAYALAM_INDIA = 'Malayalam (India)',
  MARATHI = 'Marathi',
  MANDARIN_CHINESE = 'Mandarin Chinese',
  NORWEGIAN_NORWAY = 'Norwegian (Norway)',
  POLISH_POLAND = 'Polish (Poland)',
  PORTUGESE_BRAZIL = 'Portuguese (Brazil)',
  PORTUGESE_PORTUGAL = 'Portuguese (Portugal)',
  ROMANIAN = 'Romanian',
  RUSSIAN_RUSSIA = 'Russian (Russia)',
  SLOVAK_SLOVAKIA = 'Slovak (Slovakia)',
  SPANISH_SPAIN = 'Spanish (Spain)',
  SPANISH = 'Spanish',
  SINHALA = 'Sinhala',
  SWEDISH_SWEDEN = 'Swedish (Sweden)',
  TAMIL_INDIA = 'Tamil (India)',
  TELUGU_INDIA = 'Telugu (India)',
  THAI_THAILAND = 'Thai (Thailand)',
  TURKISH_TURKEY = 'Turkish (Turkey)',
  UKRANIAN_UKRAIN = 'Ukrainian (Ukraine)',
  VIETNAMESE_VIETNAM = 'Vietnamese (Vietnam)',
}

export interface GoogleVoice {
  voiceLanguage: VoiceLanguage;
  voiceType: VoiceType[];
  voiceName: string[];
  ssmlGender: string;
}

export enum Voice {
  DEFAULT = 'default', // not a real voice (default no voice)
  AUDIO = 'audio', // not a real voice (use content as audio url)
}

export const DEFAULT_LOCALE_VOICE_MAP = {};

export const REGIONAL_VOICE = [
  {
    label: 'Default',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English US',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English AU',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English GB',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English IN',
    options: [Voice.DEFAULT],
  },
  {
    label: 'German',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Spanish',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Italian',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Japanese',
    options: [Voice.DEFAULT],
  },
  {
    label: 'French',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Portuguese',
    options: [Voice.DEFAULT],
  },
];

// gactions
export const LocaleCodeToCountryLanguage: Record<Locale, VoiceLanguage> = {
  [Locale.ZH_HK]: VoiceLanguage.CHINESE_HONG_KONG,
  [Locale.ZH_TW]: VoiceLanguage.CHINESE_TAIWAN,
  [Locale.DA_DK]: VoiceLanguage.DANISH_DENMARK,
  [Locale.NL_NL]: VoiceLanguage.DUTCH_NETHERLANDS,
  [Locale.NL_BE]: VoiceLanguage.DUTCH_BELGIUM,
  [Locale.EN_AU]: VoiceLanguage.ENGLISH_AUSTRALIA,
  [Locale.EN_CA]: VoiceLanguage.ENGLISH_CANADA,
  [Locale.EN_GB]: VoiceLanguage.ENGLISH_UK,
  [Locale.EN_IN]: VoiceLanguage.ENGLISH_INDIA,
  [Locale.EN_BE]: VoiceLanguage.ENGLISH_BELGIUM,
  [Locale.EN_SG]: VoiceLanguage.ENGLISH_SINGAPORE,
  [Locale.EN_US]: VoiceLanguage.ENGLISH_US,
  [Locale.FR_FR]: VoiceLanguage.FRENCH_FRANCE,
  [Locale.FR_CA]: VoiceLanguage.FRENCH_CANADA,
  [Locale.FR_BE]: VoiceLanguage.FRENCH_BELGIUM,
  [Locale.DE_DE]: VoiceLanguage.GERMAN_GERMANY,
  [Locale.DE_AT]: VoiceLanguage.GERMAN_AUSTRIA,
  [Locale.DE_CH]: VoiceLanguage.GERMAN_SWITZERLAND,
  [Locale.DE_BE]: VoiceLanguage.GERMAN_BELGIUM,
  [Locale.HI_IN]: VoiceLanguage.HINDI_INDIA,
  [Locale.ID_ID]: VoiceLanguage.INDONASIAN_INDONESIA,
  [Locale.IT_IT]: VoiceLanguage.ITALIAN_ITALY,
  [Locale.JA_JP]: VoiceLanguage.JAPANESE_JAPAN,
  [Locale.KO_KR]: VoiceLanguage.KOREAN_SOUTH_KOREA,
  [Locale.NO_NO]: VoiceLanguage.NORWEGIAN_NORWAY,
  [Locale.PL_PL]: VoiceLanguage.POLISH_POLAND,
  [Locale.PT_BR]: VoiceLanguage.PORTUGESE_BRAZIL,
  [Locale.RU_RU]: VoiceLanguage.RUSSIAN_RUSSIA,
  [Locale.ES_ES]: VoiceLanguage.SPANISH_SPAIN,
  [Locale.ES_419]: VoiceLanguage.SPANISH,
  [Locale.SV_SE]: VoiceLanguage.SWEDISH_SWEDEN,
  [Locale.TH_TH]: VoiceLanguage.THAI_THAILAND,
  [Locale.TR_TR]: VoiceLanguage.TURKISH_TURKEY,
};

export const DEFAULT_LANGUAGE_VOICE_MAP = {
  [Language.DA]: `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-A`,
  [Language.DE]: `${VoiceLanguageCode.DE_DE}-${VoiceType.STANDARD}-A`,
  [Language.EN]: `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-B`,
  [Language.ES]: `${VoiceLanguageCode.ES_ES}-${VoiceType.STANDARD}-A`,
  [Language.FR]: `${VoiceLanguageCode.FR_FR}-${VoiceType.STANDARD}-A`,
  [Language.HI]: `${VoiceLanguageCode.HI_IN}-${VoiceType.STANDARD}-A`,
  [Language.HK]: `${VoiceLanguageCode.YUQ_HK}-${VoiceType.STANDARD}-A`,
  [Language.ID]: `${VoiceLanguageCode.ID_ID}-${VoiceType.STANDARD}-A`,
  [Language.IT]: `${VoiceLanguageCode.IT_IT}-${VoiceType.STANDARD}-A`,
  [Language.JA]: `${VoiceLanguageCode.JA_JP}-${VoiceType.STANDARD}-A`,
  [Language.KO]: `${VoiceLanguageCode.KO_KR}-${VoiceType.STANDARD}-A`,
  [Language.NL]: `${VoiceLanguageCode.NL_NL}-${VoiceType.STANDARD}-B`,
  [Language.NO]: `${VoiceLanguageCode.NB_NO}-${VoiceType.STANDARD}-A`,
  [Language.PL]: `${VoiceLanguageCode.PL_PL}-${VoiceType.STANDARD}-A`,
  [Language.PT]: `${VoiceLanguageCode.PT_BR}-${VoiceType.STANDARD}-A`,
  [Language.RU]: `${VoiceLanguageCode.RU_RU}-${VoiceType.STANDARD}-A`,
  [Language.SV]: `${VoiceLanguageCode.SV_SE}-${VoiceType.STANDARD}-A`,
  [Language.TH]: `${VoiceLanguageCode.TH_TH}-${VoiceType.STANDARD}-A`,
  [Language.TR]: `${VoiceLanguageCode.TR_TR}-${VoiceType.STANDARD}-A`,
  [Language.TW]: `${VoiceLanguageCode.CMN_TW}-${VoiceType.STANDARD}-A`,
};

export const VoiceLanguageCodeToVoice: Record<VoiceLanguageCode, GoogleVoice[]> = {
  [VoiceLanguageCode.EN_US]: [
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-3`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-E`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-E`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-F`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-F`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-G`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-G`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-G`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-4`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-H`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-H`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-H`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-5`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-I`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-I`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-I`,
      ],
      ssmlGender: `${SSMLGender.MALE}-4`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_US,
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_US}-${VoiceType.STANDARD}-J`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.WAVENET}-J`,
        `${VoiceLanguageCode.EN_US}-${VoiceType.NEURAL2}-J`,
      ],
      ssmlGender: `${SSMLGender.MALE}-5`,
    },
  ],
  [VoiceLanguageCode.DA_DK]: [
    {
      voiceLanguage: VoiceLanguage.DANISH_DENMARK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.DA_DK}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.DANISH_DENMARK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.DA_DK}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.DANISH_DENMARK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.DA_DK}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.DANISH_DENMARK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.DA_DK}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-E`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
  [VoiceLanguageCode.DE_DE]: [
    {
      voiceLanguage: VoiceLanguage.GERMAN_GERMANY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.DE_DE}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.DE_DE}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.GERMAN_GERMANY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.DE_DE}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.DE_DE}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.DE_DE}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.GERMAN_GERMANY,
      voiceType: [VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.DE_DE}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.DE_DE}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.GERMAN_GERMANY,
      voiceType: [VoiceType.WAVENET, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.DE_DE}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.DE_DE}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.GERMAN_GERMANY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.DE_DE}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.DE_DE}-${VoiceType.STANDARD}-E`,
      ],
      ssmlGender: `${SSMLGender.MALE}-3`,
    },
    {
      voiceLanguage: VoiceLanguage.GERMAN_GERMANY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.DE_DE}-${VoiceType.WAVENET}-F`,
        `${VoiceLanguageCode.DE_DE}-${VoiceType.STANDARD}-F`,
        `${VoiceLanguageCode.DE_DE}-${VoiceType.NEURAL2}-F`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
  [VoiceLanguageCode.ES_ES]: [
    {
      voiceLanguage: VoiceLanguage.SPANISH_SPAIN,
      voiceType: [VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.ES_ES}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.ES_ES}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.SPANISH_SPAIN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.ES_ES}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.ES_ES}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.ES_ES}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.SPANISH_SPAIN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.ES_ES}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.ES_ES}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.SPANISH_SPAIN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.ES_ES}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.ES_ES}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.ES_ES}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
    {
      voiceLanguage: VoiceLanguage.SPANISH_SPAIN,
      voiceType: [VoiceType.NEURAL2],
      voiceName: [`${VoiceLanguageCode.ES_ES}-${VoiceType.NEURAL2}-E`],
      ssmlGender: `${SSMLGender.FEMALE}-4`,
    },
    {
      voiceLanguage: VoiceLanguage.SPANISH_SPAIN,
      voiceType: [VoiceType.NEURAL2],
      voiceName: [`${VoiceLanguageCode.ES_ES}-${VoiceType.NEURAL2}-F`],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.NL_NL]: [
    {
      voiceLanguage: VoiceLanguage.DUTCH_NETHERLANDS,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NL_NL}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.NL_NL}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.DUTCH_NETHERLANDS,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NL_NL}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.NL_NL}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.DUTCH_NETHERLANDS,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NL_NL}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.NL_NL}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.DUTCH_NETHERLANDS,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NL_NL}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.NL_NL}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.DUTCH_NETHERLANDS,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NL_NL}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.NL_NL}-${VoiceType.STANDARD}-E`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
  [VoiceLanguageCode.NL_BE]: [
    {
      voiceLanguage: VoiceLanguage.DUTCH_BELGIUM,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NL_BE}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.NL_BE}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.DUTCH_BELGIUM,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NL_BE}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.NL_BE}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
  ],
  [VoiceLanguageCode.FR_FR]: [
    {
      voiceLanguage: VoiceLanguage.FRENCH_FRANCE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_FR}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.FRENCH_FRANCE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_FR}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.FRENCH_FRANCE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_FR}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.FRENCH_FRANCE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_FR}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.FRENCH_FRANCE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_FR}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.STANDARD}-E`,
        `${VoiceLanguageCode.FR_FR}-${VoiceType.NEURAL2}-E`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
  [VoiceLanguageCode.FR_CA]: [
    {
      voiceLanguage: VoiceLanguage.FRENCH_CANADA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_CA}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.FR_CA}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.FR_CA}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.FRENCH_CANADA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_CA}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.FR_CA}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.FR_CA}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.FRENCH_CANADA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_CA}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.FR_CA}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.FR_CA}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.FRENCH_CANADA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.FR_CA}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.FR_CA}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.FR_CA}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.HI_IN]: [
    {
      voiceLanguage: VoiceLanguage.HINDI_INDIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.HI_IN}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.HI_IN}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.HI_IN}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.HINDI_INDIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.HI_IN}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.HI_IN}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.HI_IN}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.HINDI_INDIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.HI_IN}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.HI_IN}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.HI_IN}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.HINDI_INDIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.HI_IN}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.HI_IN}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.HI_IN}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
  ],
  [VoiceLanguageCode.ID_ID]: [
    {
      voiceLanguage: VoiceLanguage.INDONASIAN_INDONESIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.ID_ID}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.ID_ID}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.INDONASIAN_INDONESIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.ID_ID}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.ID_ID}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.INDONASIAN_INDONESIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.ID_ID}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.ID_ID}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.INDONASIAN_INDONESIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.ID_ID}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.ID_ID}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
  ],
  [VoiceLanguageCode.IT_IT]: [
    {
      voiceLanguage: VoiceLanguage.ITALIAN_ITALY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.IT_IT}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.IT_IT}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.IT_IT}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ITALIAN_ITALY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.IT_IT}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.IT_IT}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ITALIAN_ITALY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.IT_IT}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.IT_IT}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.IT_IT}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ITALIAN_ITALY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.IT_IT}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.IT_IT}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.JA_JP]: [
    {
      voiceLanguage: VoiceLanguage.JAPANESE_JAPAN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.JA_JP}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.JA_JP}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.JAPANESE_JAPAN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.JA_JP}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.JA_JP}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.JA_JP}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.JAPANESE_JAPAN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.JA_JP}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.JA_JP}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.JA_JP}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.JAPANESE_JAPAN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.JA_JP}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.JA_JP}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.JA_JP}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.KO_KR]: [
    {
      voiceLanguage: VoiceLanguage.KOREAN_SOUTH_KOREA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.KO_KR}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.KO_KR}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.KO_KR}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.KOREAN_SOUTH_KOREA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.KO_KR}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.KO_KR}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.KO_KR}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.KOREAN_SOUTH_KOREA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.KO_KR}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.KO_KR}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.KO_KR}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.KOREAN_SOUTH_KOREA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.KO_KR}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.KO_KR}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.AR_XA]: [
    {
      voiceLanguage: VoiceLanguage.ARABIC,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.AR_XA}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.AR_XA}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ARABIC,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.AR_XA}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.AR_XA}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ARABIC,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.AR_XA}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.AR_XA}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ARABIC,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.AR_XA}-${VoiceType.STANDARD}-D`],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
  ],
  [VoiceLanguageCode.BN_IN]: [
    {
      voiceLanguage: VoiceLanguage.BENGALI_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.KO_KR}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.BENGALI_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.KO_KR}-${VoiceType.STANDARD}-B`],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
  ],
  [VoiceLanguageCode.CMN_CN]: [
    {
      voiceLanguage: VoiceLanguage.MANDARIN_CHINESE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.CMN_CN}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.CMN_CN}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.MANDARIN_CHINESE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.CMN_CN}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.CMN_CN}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.MANDARIN_CHINESE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.CMN_CN}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.CMN_CN}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.MANDARIN_CHINESE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.CMN_CN}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.CMN_CN}-${VoiceType.WAVENET}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
  ],
  [VoiceLanguageCode.CMN_TW]: [
    {
      voiceLanguage: VoiceLanguage.MANDARIN_CHINESE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.CMN_TW}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.CMN_TW}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.MANDARIN_CHINESE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.CMN_TW}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.CMN_TW}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.MANDARIN_CHINESE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.CMN_TW}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.CMN_TW}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.CS_CZ]: [
    {
      voiceLanguage: VoiceLanguage.CZECH_CZECH_REPUBLIC,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.CS_CZ}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.CS_CZ}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
  ],
  [VoiceLanguageCode.EL_GR]: [
    {
      voiceLanguage: VoiceLanguage.GREEK_GREECE,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.EL_GR}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.EL_GR}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
  ],
  [VoiceLanguageCode.EN_AU]: [
    {
      voiceLanguage: VoiceLanguage.ENGLISH_AUSTRALIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_AU}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.EN_AU}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.EN_AU}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_AUSTRALIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_AU}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.EN_AU}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.EN_AU}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_AUSTRALIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_AU}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.EN_AU}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.EN_AU}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_AUSTRALIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_AU}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.EN_AU}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.EN_AU}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.EN_GB]: [
    {
      voiceLanguage: VoiceLanguage.ENGLISH_UK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_GB}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_UK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_GB}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_UK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_GB}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_UK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_GB}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.NEURAL2}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_UK,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.EN_GB}-${VoiceType.STANDARD}-F`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.WAVENET}-F`,
        `${VoiceLanguageCode.EN_GB}-${VoiceType.NEURAL2}-f`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
  [VoiceLanguageCode.EN_IN]: [
    {
      voiceLanguage: VoiceLanguage.ENGLISH_INDIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.EN_IN}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.EN_IN}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_INDIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.EN_IN}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.EN_IN}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_INDIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.EN_IN}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.EN_IN}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_INDIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.EN_IN}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.EN_IN}-${VoiceType.WAVENET}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
  ],
  [VoiceLanguageCode.FI_FI]: [
    {
      voiceLanguage: VoiceLanguage.FINNISH_FINLAND,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.FI_FI}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.FI_FI}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
  ],
  [VoiceLanguageCode.FIL_PH]: [
    {
      voiceLanguage: VoiceLanguage.FILIPINO_PHILIPPINES,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.FIL_PH}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.FIL_PH}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.FILIPINO_PHILIPPINES,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.FIL_PH}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.FIL_PH}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.FILIPINO_PHILIPPINES,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.FIL_PH}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.FIL_PH}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.FILIPINO_PHILIPPINES,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.FIL_PH}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.FIL_PH}-${VoiceType.WAVENET}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.GU_IN]: [
    {
      voiceLanguage: VoiceLanguage.GUJARATI_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.GU_IN}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.GUJARATI_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.GU_IN}-${VoiceType.STANDARD}-B`],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
  ],
  [VoiceLanguageCode.HU_HU]: [
    {
      voiceLanguage: VoiceLanguage.HUNGARIAN_HUNGARY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.HU_HU}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.HU_HU}-${VoiceType.WAVENET}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
  ],
  [VoiceLanguageCode.KN_IN]: [
    {
      voiceLanguage: VoiceLanguage.KANNADA_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.KN_IN}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.GUJARATI_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.KN_IN}-${VoiceType.STANDARD}-B`],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
  ],
  [VoiceLanguageCode.ML_IN]: [
    {
      voiceLanguage: VoiceLanguage.MALAYALAM_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.ML_IN}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.MALAYALAM_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.ML_IN}-${VoiceType.STANDARD}-B`],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
  ],
  [VoiceLanguageCode.NB_NO]: [
    {
      voiceLanguage: VoiceLanguage.NORWEGIAN_NORWAY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NB_NO}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.NB_NO}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.NORWEGIAN_NORWAY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NB_NO}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.NB_NO}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.NORWEGIAN_NORWAY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NB_NO}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.NB_NO}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.NORWEGIAN_NORWAY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NB_NO}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.NB_NO}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.NORWEGIAN_NORWAY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.NB_NO}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.NB_NO}-${VoiceType.STANDARD}-E`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
  [VoiceLanguageCode.PL_PL]: [
    {
      voiceLanguage: VoiceLanguage.POLISH_POLAND,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PL_PL}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.PL_PL}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.POLISH_POLAND,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PL_PL}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.PL_PL}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.POLISH_POLAND,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PL_PL}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.PL_PL}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.POLISH_POLAND,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PL_PL}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.PL_PL}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.POLISH_POLAND,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PL_PL}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.PL_PL}-${VoiceType.STANDARD}-E`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
  [VoiceLanguageCode.PT_PT]: [
    {
      voiceLanguage: VoiceLanguage.PORTUGESE_PORTUGAL,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PT_PT}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.PT_PT}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.PORTUGESE_PORTUGAL,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PT_PT}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.PT_PT}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.PORTUGESE_PORTUGAL,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PT_PT}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.PT_PT}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.PORTUGESE_PORTUGAL,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.PT_PT}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.PT_PT}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
  ],
  [VoiceLanguageCode.PT_BR]: [
    {
      voiceLanguage: VoiceLanguage.PORTUGESE_BRAZIL,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.PT_BR}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.PT_BR}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.PT_BR}-${VoiceType.NEURAL2}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.PORTUGESE_BRAZIL,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.PT_BR}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.PT_BR}-${VoiceType.STANDARD}-B`,
        `${VoiceLanguageCode.PT_BR}-${VoiceType.NEURAL2}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.PORTUGESE_BRAZIL,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [
        `${VoiceLanguageCode.PT_BR}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.PT_BR}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.PT_BR}-${VoiceType.NEURAL2}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
  ],
  [VoiceLanguageCode.RU_RU]: [
    {
      voiceLanguage: VoiceLanguage.RUSSIAN_RUSSIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.RU_RU}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.RU_RU}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.RUSSIAN_RUSSIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.RU_RU}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.RU_RU}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.RUSSIAN_RUSSIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.RU_RU}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.RU_RU}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.RUSSIAN_RUSSIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.RU_RU}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.RU_RU}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.RUSSIAN_RUSSIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.RU_RU}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.RU_RU}-${VoiceType.STANDARD}-E`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
  [VoiceLanguageCode.SK_SK]: [
    {
      voiceLanguage: VoiceLanguage.SLOVAK_SLOVAKIA,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.SK_SK}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.SK_SK}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
  ],
  [VoiceLanguageCode.SV_SE]: [
    {
      voiceLanguage: VoiceLanguage.SWEDISH_SWEDEN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.SV_SE}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.SV_SE}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
  ],
  [VoiceLanguageCode.TA_IN]: [
    {
      voiceLanguage: VoiceLanguage.TAMIL_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.TA_IN}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.TAMIL_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.TA_IN}-${VoiceType.STANDARD}-B`],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
  ],
  [VoiceLanguageCode.TE_IN]: [
    {
      voiceLanguage: VoiceLanguage.TELUGU_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.TE_IN}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.TELUGU_INDIA,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.TE_IN}-${VoiceType.STANDARD}-B`],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
  ],
  [VoiceLanguageCode.TH_TH]: [
    {
      voiceLanguage: VoiceLanguage.THAI_THAILAND,
      voiceType: [VoiceType.STANDARD, VoiceType.NEURAL2],
      voiceName: [`${VoiceLanguageCode.TH_TH}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.THAI_THAILAND,
      voiceType: [VoiceType.NEURAL2],
      voiceName: [`${VoiceLanguageCode.TH_TH}-${VoiceType.NEURAL2}-C`],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
  ],
  [VoiceLanguageCode.TR_TR]: [
    {
      voiceLanguage: VoiceLanguage.TURKISH_TURKEY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.TR_TR}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.TR_TR}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.TURKISH_TURKEY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.TR_TR}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.TR_TR}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.TURKISH_TURKEY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.TR_TR}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.TR_TR}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.TURKISH_TURKEY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.TR_TR}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.TR_TR}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
    {
      voiceLanguage: VoiceLanguage.TURKISH_TURKEY,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.TR_TR}-${VoiceType.WAVENET}-E`,
        `${VoiceLanguageCode.TR_TR}-${VoiceType.STANDARD}-E`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.UK_UA]: [
    {
      voiceLanguage: VoiceLanguage.UKRANIAN_UKRAIN,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.UK_UA}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.UK_UA}-${VoiceType.WAVENET}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
  ],
  [VoiceLanguageCode.VI_VN]: [
    {
      voiceLanguage: VoiceLanguage.VIETNAMESE_VIETNAM,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.VI_VN}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.VI_VN}-${VoiceType.STANDARD}-A`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.VIETNAMESE_VIETNAM,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.VI_VN}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.VI_VN}-${VoiceType.STANDARD}-B`,
      ],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.VIETNAMESE_VIETNAM,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.VI_VN}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.VI_VN}-${VoiceType.STANDARD}-C`,
      ],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.VIETNAMESE_VIETNAM,
      voiceType: [VoiceType.WAVENET, VoiceType.STANDARD],
      voiceName: [
        `${VoiceLanguageCode.VI_VN}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.VI_VN}-${VoiceType.STANDARD}-D`,
      ],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
  [VoiceLanguageCode.YUQ_HK]: [
    {
      voiceLanguage: VoiceLanguage.CHINESE_HONG_KONG,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.YUQ_HK}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.CHINESE_HONG_KONG,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.YUQ_HK}-${VoiceType.STANDARD}-B`],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.CHINESE_HONG_KONG,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.YUQ_HK}-${VoiceType.STANDARD}-C`],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.CHINESE_HONG_KONG,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.YUQ_HK}-${VoiceType.STANDARD}-D`],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
  ],
};

export const ALL_GOOGLE_VOICE_NAMES = new Set(
  Object.values(VoiceLanguageCodeToVoice).flatMap((value) => value.flatMap((voice) => voice.voiceName))
);
