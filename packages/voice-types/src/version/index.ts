import { Version } from '@voiceflow/base-types';

import { Intent, Prompt } from '@/types';

import { defaultVoiceVersionSettings, VoiceVersionSettings } from './settings';

export * from './settings';

export interface VoiceVersionData<Voice> extends Version.BaseVersionData<Prompt<Voice>> {
  intents: Intent<Voice>[];
  settings: VoiceVersionSettings<Voice>;
}

export const defaultVoiceVersionData = <Voice>(
  { intents = [], settings, ...data }: Partial<VoiceVersionData<Voice>>,
  options: { defaultPromptVoice: Voice }
): VoiceVersionData<Voice> => ({
  ...Version.defaultBaseVersionData<Prompt<Voice>>(data),
  intents,
  settings: defaultVoiceVersionSettings<Voice>(settings, options),
});

export interface VoiceVersion<Voice> extends Version.BaseVersion<Prompt<Voice>> {
  platformData: VoiceVersionData<Voice>;
}
