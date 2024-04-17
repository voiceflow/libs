import type { GoogleVoice, Language, VoiceLanguageCode, VoiceType } from '@google-types/constants';
import { LanguageToLocale, LocaleToVoiceLanguageCode, VoiceLanguageCodeToVoice } from '@google-types/constants';

export const getVoiceForLanguage = (language: Language, voiceType: VoiceType): GoogleVoice[][] => {
  const locales = LanguageToLocale[language];

  return (
    locales.map((locale) => {
      const languageCode: VoiceLanguageCode = LocaleToVoiceLanguageCode[locale];

      return (
        VoiceLanguageCodeToVoice[languageCode].filter((voice: GoogleVoice) => voice.voiceType.includes(voiceType)) || []
      );
    }) || []
  );
};
