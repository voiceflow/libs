import { Nullable, Version } from '@voiceflow/base-types';

import { Prompt } from '@/types';
import { defaultPrompt } from '@/utils';

export interface VoiceVersionSettings<Voice> extends Version.BaseVersionSettings<Prompt<Voice>> {
  session: Version.RestartSession | Version.ResumeSession<Prompt<Voice>>;
  defaultVoice: Nullable<Voice>;
}

export const defaultVoiceVersionSettings = <Voice>(
  { error, defaultVoice = null, ...baseSettings }: Partial<VoiceVersionSettings<Voice>> = {},
  { defaultPromptVoice }: { defaultPromptVoice: Voice }
): VoiceVersionSettings<Voice> => ({
  ...Version.defaultBaseVersionSettings<Prompt<Voice>>(baseSettings),
  error: defaultPrompt<Voice>(error, defaultVoice ?? defaultPromptVoice),
  defaultVoice,
});
