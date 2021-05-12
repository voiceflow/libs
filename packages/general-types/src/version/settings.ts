import { CanvasNodeVisibility, Locale, Prompt, Voice } from '@/types';

export enum RepeatType {
  OFF = 'OFF',
  ALL = 'ALL',
  DIALOG = 'DIALOG',
}

export enum SessionType {
  RESUME = 'resume',
  RESTART = 'restart',
}

export type RestartSession = {
  type: SessionType.RESTART;
};

export type BaseResumeSession<V> = {
  type: SessionType.RESUME;
  resume: null | Prompt<V>;
  follow: null | Prompt<V>;
};

export type BaseVersionSettings<V> = {
  error: null | Prompt<V>;
  repeat: RepeatType;
  session: RestartSession | BaseResumeSession<V>;
  defaultVoice: null | V;
  defaultCanvasNodeVisibility: null | CanvasNodeVisibility;
};

export type ResumeSession = BaseResumeSession<Voice>;

export type GeneralVersionSettings = BaseVersionSettings<Voice> & {
  locales: Locale[];
};

export const defaultPrompt = <V>(prompt: Prompt<V> | null | undefined, defaultVoice: V): null | Prompt<V> => {
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
    defaultCanvasNodeVisibility = null,
  }: Partial<BaseVersionSettings<V>> = {},
  { defaultPromptVoice }: { defaultPromptVoice: V }
): BaseVersionSettings<V> => ({
  error: defaultPrompt<V>(error, defaultVoice ?? defaultPromptVoice),
  repeat,
  session,
  defaultVoice,
  defaultCanvasNodeVisibility,
});

export const defaultGeneralVersionSettings = ({
  locales = [Locale.EN_US],
  ...baseSettings
}: Partial<GeneralVersionSettings> = {}): GeneralVersionSettings => ({
  ...defaultBaseVersionSettings(baseSettings, { defaultPromptVoice: Voice.DEFAULT }),
  locales,
});
