import { Voice } from '@google-types/constants';
import { VoiceVersion } from '@voiceflow/voice-types';

export interface SharedVoiceSettings extends VoiceVersion.Settings<Voice> {}

export interface VoiceSettings extends SharedVoiceSettings {}

export const defaultSharedVoiceSettings = (settings: Partial<SharedVoiceSettings> = {}): SharedVoiceSettings => ({
  ...VoiceVersion.defaultSettings<Voice>(settings, { defaultPromptVoice: Voice.DEFAULT }),
});

export const defaultVoiceSettings = (settings: Partial<VoiceSettings> = {}): VoiceSettings => ({
  ...defaultSharedVoiceSettings(settings),
});
