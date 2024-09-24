import type { Prompt } from '@voice-types/models';
import { prompt } from '@voice-types/utils';
import type { Nullable } from '@voiceflow/base-types';
import { BaseVersion } from '@voiceflow/base-types';

export interface Settings<Voice extends string> extends BaseVersion.Settings<Prompt<Voice>> {
  session: BaseVersion.Session<Prompt<Voice>>;
  defaultVoice: Nullable<Voice>;
}

export interface DefaultSettingsParams<Voice> {
  defaultPromptVoice: Voice;
}

export const defaultSettings = <Voice extends string>(
  { error, defaultVoice = null, ...baseSettings }: Partial<Settings<Voice>>,
  { defaultPromptVoice }: DefaultSettingsParams<Voice>
): Settings<Voice> => ({
  ...BaseVersion.defaultSettings<Prompt<Voice>>(baseSettings),
  error: prompt.defaultPrompt<Voice>(error, defaultVoice ?? defaultPromptVoice),
  defaultVoice,
});
