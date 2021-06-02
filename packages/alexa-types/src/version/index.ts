import { StrictVersionPlatformData, Version } from '@voiceflow/api-sdk';
import { defaultBaseVersionData, Locale } from '@voiceflow/general-types';

import { AlexaCommand } from '@/nodes';
import { Voice } from '@/types';

import { AlexaVersionPublishing, defaultAlexaVersionPublishing } from './publishing';
import { AlexaVersionSettings, defaultAlexaVersionSettings } from './settings';

export * from './publishing';
export * from './settings';

export enum AlexaStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export interface AlexaVersionData extends StrictVersionPlatformData<AlexaVersionSettings, AlexaVersionPublishing> {
  status: {
    stage: AlexaStage;
  };
}

export type AlexaVersion = Version<AlexaVersionData, AlexaCommand, Locale>;

export const defaultAlexaVersionData = ({
  status: { stage = AlexaStage.DEV } = { stage: AlexaStage.DEV },
  settings,
  publishing,
  ...generalVersionData
}: Partial<AlexaVersionData>): AlexaVersionData => ({
  ...defaultBaseVersionData<Voice>(generalVersionData, { defaultPromptVoice: Voice.ALEXA }),
  status: { stage },
  settings: defaultAlexaVersionSettings(settings),
  publishing: defaultAlexaVersionPublishing(publishing),
});
