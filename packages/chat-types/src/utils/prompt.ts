import { Prompt } from '@chat-types/models';
import { Nullable } from '@voiceflow/base-types';

export const defaultPrompt = (prompt: Nullable<Prompt> | undefined): Nullable<Prompt> => {
  if (!prompt?.content) {
    return null;
  }

  return {
    id: prompt.id,
    content: prompt.content,
  };
};
