import { DeepPartialByKey } from '@voiceflow/base-types';
import { VoiceVersion } from '@voiceflow/voice-types';
import { Voice } from '@voiceflow-types/constants';

import { BasePrototype } from '../base';
import { defaultSharedVoiceSettings, defaultVoiceSettings, SharedVoiceSettings, VoiceSettings } from './settings';

export * from './settings';

export interface SharedVoicePlatformData extends VoiceVersion.PlatformData<Voice> {
  settings: SharedVoiceSettings;
}

export interface VoicePlatformData extends SharedVoicePlatformData {
  settings: VoiceSettings;
}

export interface VoiceVersion extends VoiceVersion.Version<Voice, BasePrototype> {
  platformData: VoicePlatformData;
}

export const defaultSharedVoicePlatformData = ({
  settings,
  ...data
}: DeepPartialByKey<SharedVoicePlatformData, 'settings'>): SharedVoicePlatformData => ({
  ...VoiceVersion.defaultPlatformData<Voice>(data, { defaultPromptVoice: Voice.DEFAULT }),
  settings: defaultSharedVoiceSettings(settings),
});

export const defaultVoicePlatformData = ({ settings, ...data }: DeepPartialByKey<VoicePlatformData, 'settings'>): VoicePlatformData => ({
  ...defaultSharedVoicePlatformData(data),
  settings: defaultVoiceSettings(settings),
});
