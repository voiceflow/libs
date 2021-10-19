import { Models } from '@voiceflow/base-types';
import { Constants } from '@voiceflow/general-types';
import { Version } from '@voiceflow/voice-types';

import { Voice } from '@/constants';
import { AnyAlexaCommand } from '@/node';

import { AlexaVersionPublishing, defaultAlexaVersionPublishing } from './publishing';
import { AlexaVersionSettings, defaultAlexaVersionSettings } from './settings';

export * from './publishing';
export * from './settings';

export enum AlexaStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export interface AlexaVersionData extends Version.VoiceVersionData<Voice> {
  status: { stage: AlexaStage };
  settings: AlexaVersionSettings;
  publishing: AlexaVersionPublishing;
}

export interface AlexaVersion extends Version.VoiceVersion<Voice> {
  prototype?: Models.VersionPrototype<AnyAlexaCommand, Constants.Locale>;
  platformData: AlexaVersionData;
}

export const defaultAlexaVersionData = ({
  status: { stage = AlexaStage.DEV } = { stage: AlexaStage.DEV },
  settings,
  publishing,
  ...generalVersionData
}: Partial<AlexaVersionData>): AlexaVersionData => ({
  ...Version.defaultVoiceVersionData<Voice>(generalVersionData, { defaultPromptVoice: Voice.ALEXA }),
  status: { stage },
  settings: defaultAlexaVersionSettings(settings),
  publishing: defaultAlexaVersionPublishing(publishing),
});
