import { Nullable } from '@voiceflow/api-sdk';

import { Prompt } from '@/types';

export const defaultPrompt = (prompt: Nullable<Prompt> | undefined): Nullable<Prompt> => {
  if (!prompt?.content) {
    return null;
  }

  return {
    content: prompt.content,
  };
};
