import { StrictVersionPlatformData, Version } from '@voiceflow/api-sdk';
import { defaultBaseVersionData, Locale } from '@voiceflow/general-types';

import { DFESLocale } from '@/constants';
import { GoogleCommand } from '@/nodes';
import { Voice } from '@/types';

import { defaultDFESVersionPublishing, defaultGoogleVersionPublishing, DFESVersionPublishing, GoogleVersionPublishing } from './publishing';
import { defaultDFESVersionSettings, defaultGoogleVersionSettings, DFESVersionSettings, GoogleVersionSettings } from './settings';

export * from './publishing';
export * from './settings';

export enum GoogleStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

// gactions
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

// dialogflow es
export interface DFESVersionData extends StrictVersionPlatformData<DFESVersionSettings, DFESVersionPublishing> {
  status: {
    stage: GoogleStage;
  };
}

export type DFESVersion = Version<DFESVersionData, GoogleCommand, DFESLocale>;

export const defaultESVersionVersionData = ({
  status: { stage = GoogleStage.DEV } = { stage: GoogleStage.DEV },
  settings,
  publishing,
  ...generalVersionData
}: Partial<DFESVersionData>): DFESVersionData => ({
  ...defaultBaseVersionData<Voice>(generalVersionData, { defaultPromptVoice: Voice.DEFAULT }),
  status: { stage },
  settings: defaultDFESVersionSettings(settings),
  publishing: defaultDFESVersionPublishing(publishing),
});
