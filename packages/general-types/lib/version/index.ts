import { StrictVersionPlatformData, Version } from '@voiceflow/api-sdk';

import { GeneralCommands } from '@/nodes';
import { Locale, Voice } from '@/types';

import { BaseVersionSettings, defaultBaseVersionSettings, defaultGeneralVersionSettings, GeneralVersionSettings } from './settings';

export * from './settings';

export type BaseVersionData<V> = StrictVersionPlatformData<BaseVersionSettings<V>>;

export const defaultBaseVersionData = <V>(
  { slots = [], intents = [], settings, publishing = {} }: Partial<BaseVersionData<V>>,
  options: { defaultPromptVoice: V }
): BaseVersionData<V> => ({
  slots,
  intents,
  settings: defaultBaseVersionSettings<V>(settings, options),
  publishing,
});

export type GeneralVersionData = StrictVersionPlatformData<GeneralVersionSettings>;
export type GeneralVersion = Version<GeneralVersionData, GeneralCommands, Locale>;

export const defaultGeneralVersionData = ({ settings, ...data }: Partial<GeneralVersionData>): GeneralVersionData => ({
  ...defaultBaseVersionData(data, { defaultPromptVoice: Voice.DEFAULT }),
  settings: defaultGeneralVersionSettings(settings),
});
