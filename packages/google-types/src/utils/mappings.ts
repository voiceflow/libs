import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { GOOGLE_TO_VOICEFLOW_LOCALE_MAP, Language, LanguageToLocale, Locale } from '../constants';

const isLang = (localeLang: Locale | Language): localeLang is Language => localeLang in LanguageToLocale;

export const localesLangsToVoiceflowLocales = (localesLangs: (Locale | Language)[]): VoiceflowConstants.Locale[] =>
  localesLangs
    .map((localeLang) =>
      isLang(localeLang) ? localesLangsToVoiceflowLocales(LanguageToLocale[localeLang]) : GOOGLE_TO_VOICEFLOW_LOCALE_MAP[localeLang]
    )
    .flat();
