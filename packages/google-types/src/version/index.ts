import { VersionPrototype } from '@voiceflow/api-sdk';
import { Version } from '@voiceflow/voice-types';

import { Locale, Voice } from '@/constants';
import { AnyGoogleCommand } from '@/node';

import {
  BaseGoogleVersionPublishing,
  defaultBaseGoogleVersionPublishing,
  defaultGoogleVersionPublishing,
  GoogleVersionPublishing,
} from './publishing';
import { BaseGoogleVersionSettings, defaultBaseGoogleVersionSettings, defaultGoogleVersionSettings, GoogleVersionSettings } from './settings';

export * from './publishing';
export * from './settings';

export enum GoogleStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

// base is used in google-dfes types

export interface BaseGoogleVersionData extends Version.VoiceVersionData<Voice> {
  status: { stage: GoogleStage };
  settings: BaseGoogleVersionSettings;
  publishing: BaseGoogleVersionPublishing;
}

export interface BaseGoogleVersion extends Version.VoiceVersion<Voice> {
  platformData: BaseGoogleVersionData;
}

export const defaultBaseGoogleVersionData = ({
  status: { stage = GoogleStage.DEV } = { stage: GoogleStage.DEV },
  settings,
  publishing,
  ...voiceVersionData
}: Partial<BaseGoogleVersionData>): BaseGoogleVersionData => ({
  ...Version.defaultVoiceVersionData<Voice>(voiceVersionData, { defaultPromptVoice: Voice.DEFAULT }),
  status: { stage },
  settings: defaultBaseGoogleVersionSettings(settings),
  publishing: defaultBaseGoogleVersionPublishing(publishing),
});

export interface GoogleVersionData extends BaseGoogleVersionData {
  settings: GoogleVersionSettings;
  publishing: GoogleVersionPublishing;
}

export interface GoogleVersion extends BaseGoogleVersion {
  prototype?: VersionPrototype<AnyGoogleCommand, Locale>;
  platformData: GoogleVersionData;
}

export const defaultGoogleVersionData = ({ settings, publishing, ...baseGoogleVersionData }: Partial<GoogleVersionData>): GoogleVersionData => ({
  ...defaultBaseGoogleVersionData(baseGoogleVersionData),
  settings: defaultGoogleVersionSettings(settings),
  publishing: defaultGoogleVersionPublishing(publishing),
});
