import { VoiceVersion } from '@voiceflow/voice-types';
import { Voice } from '@voiceflow-types/constants';

import { BaseSettings, defaultBaseSettings } from '../base';

export interface SharedVoiceSettings extends VoiceVersion.Settings<Voice> {}

export interface VoiceSettings extends SharedVoiceSettings, BaseSettings {}

export const defaultSharedVoiceSettings = (settings: Partial<SharedVoiceSettings> = {}): SharedVoiceSettings => ({
  ...VoiceVersion.defaultSettings<Voice>(settings, { defaultPromptVoice: Voice.DEFAULT }),
});

export const defaultVoiceSettings = (settings: Partial<VoiceSettings> = {}): VoiceSettings => ({
  ...defaultSharedVoiceSettings(settings),
  ...defaultBaseSettings(settings),
});
