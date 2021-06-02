import { Nullable } from '@voiceflow/api-sdk';

import { ButtonsLayout, CanvasNodeVisibility, Locale, Prompt, Voice } from '@/types';

export enum RepeatType {
  OFF = 'OFF',
  ALL = 'ALL',
  DIALOG = 'DIALOG',
}

export enum SessionType {
  RESUME = 'resume',
  RESTART = 'restart',
}

export interface RestartSession {
  type: SessionType.RESTART;
}

export interface BaseResumeSession<V> {
  type: SessionType.RESUME;
  resume: Nullable<Prompt<V>>;
  follow: Nullable<Prompt<V>>;
}

export interface BaseVersionSettings<V> {
  error: Nullable<Prompt<V>>;
  repeat: RepeatType;
  session: RestartSession | BaseResumeSession<V>;
  defaultVoice: Nullable<V>;
  defaultButtonsLayout: Nullable<ButtonsLayout>;
  defaultCanvasNodeVisibility: Nullable<CanvasNodeVisibility>;
}

export type ResumeSession = BaseResumeSession<Voice>;

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
  {
    error,
    repeat = RepeatType.ALL,
    session = { type: SessionType.RESTART },
    defaultVoice = null,
    defaultButtonsLayout = null,
    defaultCanvasNodeVisibility = null,
  }: Partial<BaseVersionSettings<V>> = {},
  { defaultPromptVoice }: { defaultPromptVoice: V }
): BaseVersionSettings<V> => ({
  error: defaultPrompt<V>(error, defaultVoice ?? defaultPromptVoice),
  repeat,
  session,
  defaultVoice,
  defaultButtonsLayout,
  defaultCanvasNodeVisibility,
});

export const defaultGeneralVersionSettings = ({
  locales = [Locale.EN_US],
  ...baseSettings
}: Partial<GeneralVersionSettings> = {}): GeneralVersionSettings => ({
  ...defaultBaseVersionSettings(baseSettings, { defaultPromptVoice: Voice.DEFAULT }),
  locales,
});
