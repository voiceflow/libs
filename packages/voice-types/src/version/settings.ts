import { BaseVersion, Nullable } from '@voiceflow/base-types';

import { Prompt } from '@/models';
import { defaultPrompt } from '@/utils';

export interface Settings<Voice> extends BaseVersion.Settings<Prompt<Voice>> {
  session: BaseVersion.Session<Prompt<Voice>>;
  defaultVoice: Nullable<Voice>;
}

export interface DefaultSettingsParams<Voice> {
  defaultPromptVoice: Voice;
}

export const defaultSettings = <Voice>(
  { error, defaultVoice = null, ...baseSettings }: Partial<Settings<Voice>>,
  { defaultPromptVoice }: DefaultSettingsParams<Voice>
): Settings<Voice> => ({
  ...BaseVersion.defaultSettings<Prompt<Voice>>(baseSettings),
  error: defaultPrompt<Voice>(error, defaultVoice ?? defaultPromptVoice),
  defaultVoice,
});
