import type { Prompt } from '@voice-types/models';
import type { Nullable } from '@voiceflow/common';

export const defaultPrompt = <V>(prompt: Nullable<Prompt<V>> | undefined, defaultVoice: V): Nullable<Prompt<V>> => {
  if (!prompt?.content) {
    return null;
  }

  return {
    voice: prompt.voice || defaultVoice,
    content: prompt.content,
  };
};
