import { VersionPrototype } from '@voiceflow/api-sdk';
import { Locale, Version as GeneralVersion } from '@voiceflow/general-types';

import { Voice } from '@/constants';
import { AlexaCommand } from '@/node';

import { AlexaVersionPublishing, defaultAlexaVersionPublishing } from './publishing';
import { AlexaVersionSettings, defaultAlexaVersionSettings } from './settings';

export * from './publishing';
export * from './settings';

export enum AlexaStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export interface AlexaVersionData extends GeneralVersion.BaseVersionData<Voice> {
  status: { stage: AlexaStage };
  settings: AlexaVersionSettings;
  publishing: AlexaVersionPublishing;
}

export interface AlexaVersion extends GeneralVersion.BaseVersion<Voice> {
  prototype: VersionPrototype<AlexaCommand, Locale>;
  platformData: AlexaVersionData;
}

export const defaultAlexaVersionData = ({
  status: { stage = AlexaStage.DEV } = { stage: AlexaStage.DEV },
  settings,
  publishing,
  ...generalVersionData
}: Partial<AlexaVersionData>): AlexaVersionData => ({
  ...GeneralVersion.defaultBaseVersionData<Voice>(generalVersionData, { defaultPromptVoice: Voice.ALEXA }),
  status: { stage },
  settings: defaultAlexaVersionSettings(settings),
  publishing: defaultAlexaVersionPublishing(publishing),
});
