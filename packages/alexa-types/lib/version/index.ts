import { Version } from '@voiceflow/api-sdk';
import { defaultGeneralVersionData, GeneralVersionData } from '@voiceflow/general-types';

import { Voice } from '../types';
import { AlexaPublishing, defaultAlexaPublishing } from './publishing';
import { AlexaSettings, defaultAlexaSettings } from './settings';

export * from './publishing';
export * from './settings';

export enum AlexaStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export type AlexaVersionData = Omit<GeneralVersionData<Voice>, 'settings' | 'publishing'> & {
  settings: AlexaSettings;
  publishing: AlexaPublishing;

  status: {
    stage: AlexaStage;
  };
};

export type AlexaVersion = Version<AlexaVersionData>;

export const defaultAlexaVersionData = ({
  status: { stage = AlexaStage.DEV } = { stage: AlexaStage.DEV },
  settings,
  publishing,
  ...generalVersionData
}: Partial<AlexaVersionData>): AlexaVersionData => ({
  ...defaultGeneralVersionData<Voice>(generalVersionData, { defaultVoice: Voice.ALEXA }),
  status: { stage },
  settings: defaultAlexaSettings(settings),
  publishing: defaultAlexaPublishing(publishing),
});
