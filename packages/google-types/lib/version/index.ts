import { Version } from '@voiceflow/api-sdk';
import { defaultGeneralVersionData, GeneralVersionData } from '@voiceflow/general-types';

import { Voice } from '../types';
import { defaultGooglePublishing, GooglePublishing } from './publishing';
import { defaultGoogleSettings, GoogleSettings } from './settings';

export * from './publishing';
export * from './settings';

export enum GoogleStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export type GoogleVersionData = Omit<GeneralVersionData<Voice>, 'settings' | 'publishing'> & {
  settings: GoogleSettings;
  publishing: GooglePublishing;

  status: {
    stage: GoogleStage;
  };
};

export type GoogleVersion = Version<GoogleVersionData>;

export const defaultGoogleVersionData = ({
  status: { stage = GoogleStage.DEV } = { stage: GoogleStage.DEV },
  settings,
  publishing,
  ...generalVersionData
}: Partial<GoogleVersionData>): GoogleVersionData => ({
  ...defaultGeneralVersionData<Voice>(generalVersionData, { defaultPromptVoice: Voice.DEFAULT }),
  status: { stage },
  settings: defaultGoogleSettings(settings),
  publishing: defaultGooglePublishing(publishing),
});
