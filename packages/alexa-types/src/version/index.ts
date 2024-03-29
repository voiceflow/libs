import { Voice } from '@alexa-types/constants';
import { AnyCommand } from '@alexa-types/node';
import { BaseModels, DeepPartialByKey } from '@voiceflow/base-types';
import { VoiceVersion } from '@voiceflow/voice-types';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { AlexaSurveyContextExtension } from './prototype';
import { defaultPublishing, Publishing } from './publishing';
import { defaultSettings, Settings } from './settings';

export * from './prototype';
export * from './publishing';
export * from './settings';

// shared only across voiceflow types

export enum Stage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export interface PlatformData extends VoiceVersion.PlatformData<Voice> {
  status: { stage: Stage };
  settings: Settings;
  publishing: Publishing;
}

export interface Version
  extends VoiceVersion.Version<Voice, BaseModels.Version.Prototype<AnyCommand, VoiceflowConstants.Locale, AlexaSurveyContextExtension>> {
  platformData: PlatformData;
}

export const defaultPlatformData = ({
  status: { stage = Stage.DEV } = { stage: Stage.DEV },
  settings,
  publishing,
  ...generalVersionData
}: DeepPartialByKey<PlatformData, 'publishing' | 'settings'>): PlatformData => ({
  ...VoiceVersion.defaultPlatformData<Voice>(generalVersionData, { defaultPromptVoice: Voice.ALEXA }),
  status: { stage },
  settings: defaultSettings(settings),
  publishing: defaultPublishing(publishing),
});
