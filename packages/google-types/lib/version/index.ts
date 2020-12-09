import { Version } from '@voiceflow/api-sdk';
import { BaseVersionData, defaultBaseVersionData, GeneralCommands, Locale } from '@voiceflow/general-types';

import { Voice } from '@/types';

import { defaultGoogleVersionPublishing, GoogleVersionPublishing } from './publishing';
import { defaultGoogleVersionSettings, GoogleVersionSettings } from './settings';

export * from './publishing';
export * from './settings';

export enum GoogleStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export type GoogleVersionData = Omit<BaseVersionData<Voice>, 'settings' | 'publishing'> & {
  settings: GoogleVersionSettings;
  publishing: GoogleVersionPublishing;

  status: {
    stage: GoogleStage;
  };
};

export type GoogleVersion = Version<GoogleVersionData, GeneralCommands, Locale>;

export const defaultGoogleVersionVersionData = ({
  status: { stage = GoogleStage.DEV } = { stage: GoogleStage.DEV },
  settings,
  publishing,
  ...generalVersionData
}: Partial<GoogleVersionData>): GoogleVersionData => ({
  ...defaultBaseVersionData<Voice>(generalVersionData, { defaultPromptVoice: Voice.DEFAULT }),
  status: { stage },
  settings: defaultGoogleVersionSettings(settings),
  publishing: defaultGoogleVersionPublishing(publishing),
});
