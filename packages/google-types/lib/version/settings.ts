import { defaultGeneralSettings, GeneralSettings, ResumeSession as GeneralResumeSession } from '@voiceflow/general-types';

import { Voice } from '../types';

export type ResumeSession = GeneralResumeSession<Voice>;

export type GoogleSettings = GeneralSettings<Voice>;

export const defaultGoogleSettings = ({ ...generalSettings }: Partial<GoogleSettings> = {}): GoogleSettings => ({
  ...defaultGeneralSettings<Voice>(generalSettings, { defaultVoice: Voice.DEFAULT }),
});
