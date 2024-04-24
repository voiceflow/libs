import type { DeepPartialByKey } from '@voiceflow/base-types';
import { VoiceVersion } from '@voiceflow/voice-types';
import { Voice } from '@voiceflow-types/constants';

import type { BasePrototype } from '../base';
import type { SharedVoiceSettings, VoiceSettings } from './settings';
import { defaultSharedVoiceSettings, defaultVoiceSettings } from './settings';

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

export const defaultVoicePlatformData = ({
  settings,
  ...data
}: DeepPartialByKey<VoicePlatformData, 'settings'>): VoicePlatformData => ({
  ...defaultSharedVoicePlatformData(data),
  settings: defaultVoiceSettings(settings),
});
