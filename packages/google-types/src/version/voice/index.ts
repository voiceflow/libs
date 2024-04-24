import { Voice } from '@google-types/constants';
import type { DeepPartialByKey } from '@voiceflow/base-types';
import { VoiceVersion } from '@voiceflow/voice-types';

import type { BasePrototype, SharedBasePlatformData } from '../base';
import { defaultSharedBasePlatformData } from '../base';
import type { SharedVoicePublishing, VoicePublishing } from './publishing';
import { defaultSharedVoicePublishing, defaultVoicePublishing } from './publishing';
import type { SharedVoiceSettings, VoiceSettings } from './settings';
import { defaultSharedVoiceSettings, defaultVoiceSettings } from './settings';

export * from './publishing';
export * from './settings';

export interface SharedVoicePlatformData extends VoiceVersion.PlatformData<Voice>, SharedBasePlatformData {
  settings: SharedVoiceSettings;
  publishing: SharedVoicePublishing;
}

export interface VoicePlatformData extends SharedVoicePlatformData {
  settings: VoiceSettings;
  publishing: VoicePublishing;
}

export interface VoiceVersion extends VoiceVersion.Version<Voice, BasePrototype> {
  platformData: VoicePlatformData;
}

export const defaultSharedVoicePlatformData = ({
  settings = {},
  publishing = {},
  ...platformData
}: DeepPartialByKey<SharedVoicePlatformData, 'settings' | 'publishing'>): SharedVoicePlatformData => ({
  ...VoiceVersion.defaultPlatformData<Voice>(platformData, { defaultPromptVoice: Voice.DEFAULT }),
  ...defaultSharedBasePlatformData(platformData),
  settings: defaultSharedVoiceSettings(settings),
  publishing: defaultSharedVoicePublishing(publishing),
});

export const defaultVoicePlatformData = ({
  settings = {},
  publishing = {},
  ...platformData
}: DeepPartialByKey<VoicePlatformData, 'settings' | 'publishing'>): VoicePlatformData => ({
  ...defaultSharedVoicePlatformData(platformData),
  settings: defaultVoiceSettings(settings),
  publishing: defaultVoicePublishing(publishing),
});
