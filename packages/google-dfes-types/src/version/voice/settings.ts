import { GoogleVersion } from '@voiceflow/google-types';

export interface SharedVoiceSettings extends GoogleVersion.SharedVoiceSettings {}

export interface VoiceSettings extends SharedVoiceSettings {}

export const defaultSharedVoiceSettings = (settings: Partial<SharedVoiceSettings> = {}): SharedVoiceSettings => ({
  ...GoogleVersion.defaultSharedVoiceSettings(settings),
});

export const defaultVoiceSettings = (settings: Partial<VoiceSettings> = {}): VoiceSettings => ({
  ...defaultSharedVoiceSettings(settings),
});
