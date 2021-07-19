import { BaseResumeSession, BaseVersionSettings, defaultBaseVersionSettings } from '@voiceflow/general-types';

import { Voice } from '@/types';

export type ResumeSession = BaseResumeSession<Voice>;

// gactions
export type GoogleVersionSettings = BaseVersionSettings<Voice>;

export const defaultGoogleVersionSettings = ({ ...generalSettings }: Partial<GoogleVersionSettings> = {}): GoogleVersionSettings => ({
  ...defaultBaseVersionSettings<Voice>(generalSettings, { defaultPromptVoice: Voice.DEFAULT }),
});

// dialogflow es
export type DFESVersionSettings = BaseVersionSettings<Voice>;

export const defaultDFESVersionSettings = ({ ...generalSettings }: Partial<DFESVersionSettings> = {}): DFESVersionSettings => ({
  ...defaultBaseVersionSettings<Voice>(generalSettings, { defaultPromptVoice: Voice.DEFAULT }),
});
