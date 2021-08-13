/* eslint-disable @typescript-eslint/no-empty-interface */

import { Nullable } from '@voiceflow/api-sdk';
import { Version } from '@voiceflow/base-types';

import { Locale, Voice } from '@/constants';
import { Prompt } from '@/types';

export interface BaseResumeSession<V> extends Version.ResumeSession {
  resume: Nullable<Prompt<V>>;
  follow: Nullable<Prompt<V>>;
}

export interface BaseVersionSettings<V> extends Version.VersionSettings {
  error: Nullable<Prompt<V>>;
  session: Version.RestartSession | BaseResumeSession<V>;
  defaultVoice: Nullable<V>;
}

export interface ResumeSession extends BaseResumeSession<Voice> {}

export interface GeneralVersionSettings extends BaseVersionSettings<Voice> {
  locales: Locale[];
}

export const defaultPrompt = <V>(prompt: Nullable<Prompt<V>> | undefined, defaultVoice: V): Nullable<Prompt<V>> => {
  if (!prompt?.content) {
    return null;
  }

  return {
    voice: prompt.voice || defaultVoice,
    content: prompt.content,
  };
};

export const defaultBaseVersionSettings = <V>(
  { error, session = { type: Version.SessionType.RESTART }, defaultVoice = null, ...baseSettings }: Partial<BaseVersionSettings<V>> = {},
  { defaultPromptVoice }: { defaultPromptVoice: V }
): BaseVersionSettings<V> => ({
  ...Version.defaultVersionSettings(baseSettings),
  error: defaultPrompt<V>(error, defaultVoice ?? defaultPromptVoice),
  session,
  defaultVoice,
});

export const defaultGeneralVersionSettings = ({
  locales = [Locale.EN_US],
  ...baseSettings
}: Partial<GeneralVersionSettings> = {}): GeneralVersionSettings => ({
  ...defaultBaseVersionSettings(baseSettings, { defaultPromptVoice: Voice.DEFAULT }),
  locales,
});
