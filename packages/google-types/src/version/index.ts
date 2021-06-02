import { StrictVersionPlatformData, Version } from '@voiceflow/api-sdk';
import { defaultBaseVersionData, Locale } from '@voiceflow/general-types';

import { GoogleCommand } from '@/nodes';
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

export interface GoogleVersionData extends StrictVersionPlatformData<GoogleVersionSettings, GoogleVersionPublishing> {
  status: {
    stage: GoogleStage;
  };
}

export type GoogleVersion = Version<GoogleVersionData, GoogleCommand, Locale>;

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
