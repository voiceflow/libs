import { Version } from '@voiceflow/voice-types';

import { Locale, Voice } from '@/constants';

export interface GeneralVersionSettings extends Version.VoiceVersionSettings<Voice> {
  locales: Locale[];
}

export const defaultGeneralVersionSettings = ({
  locales = [Locale.EN_US],
  ...voiceSettings
}: Partial<GeneralVersionSettings> = {}): GeneralVersionSettings => ({
  ...Version.defaultVoiceVersionSettings<Voice>(voiceSettings, { defaultPromptVoice: Voice.DEFAULT }),
  locales,
});
