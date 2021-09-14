/* eslint-disable @typescript-eslint/no-empty-interface */

import { Version } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

// base is used in google-dfes types
export interface BaseGoogleVersionSettings extends Version.VoiceVersionSettings<Voice> {}

export const defaultBaseGoogleVersionSettings = ({ ...voiceSettings }: Partial<BaseGoogleVersionSettings> = {}): BaseGoogleVersionSettings => ({
  ...Version.defaultVoiceVersionSettings<Voice>(voiceSettings, { defaultPromptVoice: Voice.DEFAULT }),
});

export interface GoogleVersionSettings extends BaseGoogleVersionSettings {}

export const defaultGoogleVersionSettings = ({ ...baseGoogleSettings }: Partial<GoogleVersionSettings> = {}): GoogleVersionSettings => ({
  ...defaultBaseGoogleVersionSettings(baseGoogleSettings),
});
