import { BaseResumeSession, BaseVersionSettings, defaultBaseVersionSettings } from '@voiceflow/general-types';

import { Voice } from '@/types';

export type ResumeSession = BaseResumeSession<Voice>;

export type GoogleVersionSettings = BaseVersionSettings<Voice>;

export const defaultGoogleVersionSettings = ({ ...generalSettings }: Partial<GoogleVersionSettings> = {}): GoogleVersionSettings => ({
  ...defaultBaseVersionSettings<Voice>(generalSettings, { defaultPromptVoice: Voice.DEFAULT }),
});
