import { DeepPartialByKey } from '@voiceflow/base-types';
import { GoogleConstants, GoogleVersion } from '@voiceflow/google-types';
import { VoiceVersion } from '@voiceflow/voice-types';

import { BasePrototype } from '../base';
import { defaultSharedVoicePublishing, defaultVoicePublishing, SharedVoicePublishing, VoicePublishing } from './publishing';
import { defaultSharedVoiceSettings, defaultVoiceSettings, SharedVoiceSettings, VoiceSettings } from './settings';

export * from './publishing';
export * from './settings';

export interface SharedVoicePlatformData extends GoogleVersion.SharedVoicePlatformData {
  settings: SharedVoiceSettings;
  publishing: SharedVoicePublishing;
}

export interface VoicePlatformData extends SharedVoicePlatformData {
  settings: VoiceSettings;
  publishing: VoicePublishing;
}

export interface VoiceVersion extends VoiceVersion.Version<GoogleConstants.Voice, BasePrototype> {
  platformData: VoicePlatformData;
}

export const defaultSharedVoicePlatformData = ({
  settings = {},
  publishing = {},
  ...platformData
}: DeepPartialByKey<SharedVoicePlatformData, 'settings' | 'publishing'>): SharedVoicePlatformData => ({
  ...GoogleVersion.defaultSharedVoicePlatformData(platformData),
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
