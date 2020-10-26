import { Prompt } from '../types';

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

export type ResumeSession<V> = {
  type: SessionType.RESUME;
  resume: null | Prompt<V>;
  follow: null | Prompt<V>;
};

export type GeneralSettings<V> = {
  error: null | Prompt<V>;
  repeat: RepeatType;
  session: RestartSession | ResumeSession<V>;
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

export const defaultGeneralSettings = <V>(
  { error, repeat = RepeatType.ALL, session = { type: SessionType.RESTART } }: Partial<GeneralSettings<V>> = {},
  { defaultVoice }: { defaultVoice: V }
): GeneralSettings<V> => ({
  error: defaultPrompt<V>(error, defaultVoice),
  repeat,
  session,
});
