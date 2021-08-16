import { Nullable } from '@voiceflow/api-sdk';

import { Prompt } from '@/types';

export const defaultPrompt = <V>(prompt: Nullable<Prompt<V>> | undefined, defaultVoice: V): Nullable<Prompt<V>> => {
  if (!prompt?.content) {
    return null;
  }

  return {
    voice: prompt.voice || defaultVoice,
    content: prompt.content,
  };
};
