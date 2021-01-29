import {
  GoogleVoice,
  Language,
  LanguageToLocale,
  LocaleToVoiceLanguageCode,
  VoiceLanguageCode,
  VoiceLanguageCodeToVoice,
  VoiceType,
} from '@/constants';

// eslint-disable-next-line import/prefer-default-export
export const getVoiceForLanguage = (language: Language, voiceType: VoiceType) => {
  const locales = LanguageToLocale[language];

  return (
    locales.map((locale) => {
      const languageCode: VoiceLanguageCode = LocaleToVoiceLanguageCode[locale];

      return VoiceLanguageCodeToVoice[languageCode].filter((voice: GoogleVoice) => voice.voiceType.includes(voiceType)) || [];
    }) || []
  );
};
