import { Node, VersionPrototype } from '@voiceflow/base-types';
import { Version } from '@voiceflow/voice-types';

import { Locale, Voice } from '@/constants';

import { defaultGeneralVersionSettings, GeneralVersionSettings } from './settings';

export * from './settings';

export interface GeneralVersionData extends Version.VoiceVersionData<Voice> {
  settings: GeneralVersionSettings;
}

export interface GeneralVersion extends Version.VoiceVersion<Voice> {
  prototype?: VersionPrototype<Node.Utils.AnyCommand, Locale>;
  platformData: GeneralVersionData;
}

export const defaultGeneralVersionData = ({ settings, ...data }: Partial<GeneralVersionData>): GeneralVersionData => ({
  ...Version.defaultVoiceVersionData<Voice>(data, { defaultPromptVoice: Voice.DEFAULT }),
  settings: defaultGeneralVersionSettings(settings),
});
