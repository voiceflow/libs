import type { PartialRecord } from '@voiceflow/common';
import { GoogleConstants } from '@voiceflow/google-types';

import { Locale, VoiceLanguageCode } from './locales';

const { VoiceLanguage, VoiceType, SSMLGender } = GoogleConstants;

export const LocaleCodeToCountryLanguage: PartialRecord<Locale, GoogleConstants.VoiceLanguage> = {
  [Locale.ZH_HK]: VoiceLanguage.CHINESE_HONG_KONG,
  [Locale.ZH_CN]: VoiceLanguage.MANDARIN_CHINESE,
  [Locale.DA_DK]: VoiceLanguage.DANISH_DENMARK,
  [Locale.NL]: VoiceLanguage.DUTCH,
  [Locale.EN_US]: VoiceLanguage.ENGLISH_US,
  [Locale.EN_AU]: VoiceLanguage.ENGLISH_AUSTRALIA,
  [Locale.EN_CA]: VoiceLanguage.ENGLISH_CANADA,
  [Locale.EN_GB]: VoiceLanguage.ENGLISH_UK,
  [Locale.EN_IN]: VoiceLanguage.ENGLISH_INDIA,
  [Locale.FR_CA]: VoiceLanguage.FRENCH_CANADA,
  [Locale.FR_FR]: VoiceLanguage.FRENCH_FRANCE,
  [Locale.DE]: VoiceLanguage.GERMAN_GERMANY,
  [Locale.HI]: VoiceLanguage.HINDI_INDIA,
  [Locale.ID]: VoiceLanguage.INDONASIAN_INDONESIA,
  [Locale.IT]: VoiceLanguage.ITALIAN_ITALY,
  [Locale.JA]: VoiceLanguage.JAPANESE_JAPAN,
  [Locale.KO]: VoiceLanguage.KOREAN_SOUTH_KOREA,
  [Locale.NO]: VoiceLanguage.NORWEGIAN_NORWAY,
  [Locale.PT_BR]: VoiceLanguage.PORTUGESE_BRAZIL,
  [Locale.PT]: VoiceLanguage.PORTUGESE_PORTUGAL,
  [Locale.RU]: VoiceLanguage.RUSSIAN_RUSSIA,
  [Locale.ES_ES]: VoiceLanguage.SPANISH,
  [Locale.SV]: VoiceLanguage.SWEDISH_SWEDEN,
  [Locale.TR]: VoiceLanguage.TURKISH_TURKEY,
  [Locale.UK]: VoiceLanguage.UKRANIAN_UKRAIN,
};

export const VoiceLanguageCodeToVoice: Record<VoiceLanguageCode, GoogleConstants.GoogleVoice[]> = {
  [VoiceLanguageCode.YUE_HK]: [
    {
      voiceLanguage: VoiceLanguage.CHINESE_HONG_KONG,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.YUE_HK}-${VoiceType.STANDARD}-A`],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.CHINESE_HONG_KONG,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.YUE_HK}-${VoiceType.STANDARD}-B`],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.CHINESE_HONG_KONG,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.YUE_HK}-${VoiceType.STANDARD}-C`],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.CHINESE_HONG_KONG,
      voiceType: [VoiceType.STANDARD],
      voiceName: [`${VoiceLanguageCode.YUE_HK}-${VoiceType.STANDARD}-D`],
      ssmlGender: `${SSMLGender.MALE}-2`,
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
      voiceName: [
        `${VoiceLanguageCode.EN_IN}-${VoiceType.WAVENET}-A`,
        `${VoiceLanguageCode.EN_IN}-${VoiceType.STANDARD}-A`,
      ],
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_INDIA,
      voiceName: [
        `${VoiceLanguageCode.EN_IN}-${VoiceType.WAVENET}-B`,
        `${VoiceLanguageCode.EN_IN}-${VoiceType.STANDARD}-B`,
      ],
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_INDIA,
      voiceName: [
        `${VoiceLanguageCode.EN_IN}-${VoiceType.WAVENET}-C`,
        `${VoiceLanguageCode.EN_IN}-${VoiceType.STANDARD}-C`,
      ],
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET],
      ssmlGender: `${SSMLGender.MALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.ENGLISH_INDIA,
      voiceName: [
        `${VoiceLanguageCode.EN_IN}-${VoiceType.WAVENET}-D`,
        `${VoiceLanguageCode.EN_IN}-${VoiceType.STANDARD}-D`,
      ],
      voiceType: [VoiceType.STANDARD, VoiceType.WAVENET],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
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
  [VoiceLanguageCode.DA_DK]: [
    {
      voiceLanguage: VoiceLanguage.DANISH_DENMARK,
      voiceName: [
        `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-A`,
        `${VoiceLanguageCode.DA_DK}-${VoiceType.WAVENET}-A`,
      ],
      voiceType: [],
      ssmlGender: `${SSMLGender.FEMALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.DANISH_DENMARK,
      voiceName: [
        `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-C`,
        `${VoiceLanguageCode.DA_DK}-${VoiceType.WAVENET}-C`,
      ],
      voiceType: [],
      ssmlGender: `${SSMLGender.MALE}-1`,
    },
    {
      voiceLanguage: VoiceLanguage.DANISH_DENMARK,
      voiceName: [
        `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-D`,
        `${VoiceLanguageCode.DA_DK}-${VoiceType.WAVENET}-D`,
      ],
      voiceType: [],
      ssmlGender: `${SSMLGender.FEMALE}-2`,
    },
    {
      voiceLanguage: VoiceLanguage.DANISH_DENMARK,
      voiceName: [
        `${VoiceLanguageCode.DA_DK}-${VoiceType.STANDARD}-E`,
        `${VoiceLanguageCode.DA_DK}-${VoiceType.WAVENET}-E`,
      ],
      voiceType: [],
      ssmlGender: `${SSMLGender.FEMALE}-3`,
    },
  ],
};
