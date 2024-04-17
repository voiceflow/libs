import type { ChatModels } from '@voiceflow/chat-types';
import type { VoiceModels } from '@voiceflow/voice-types';

export type AnyPrompt<Voice extends string = string> =
  | VoiceModels.Prompt<Voice>
  | ChatModels.Prompt
  | VoiceModels.IntentPrompt<Voice>;

export const isChatPrompt = (prompt?: AnyPrompt | null): prompt is ChatModels.Prompt =>
  !!(prompt && 'content' in prompt && Array.isArray(prompt.content));

export const isVoicePrompt = <Voice extends string = string>(
  prompt?: AnyPrompt | null
): prompt is VoiceModels.Prompt<Voice> => !!(prompt && 'content' in prompt && typeof prompt.content === 'string');

export const isIntentVoicePrompt = <Voice extends string = string>(
  prompt?: AnyPrompt | null
): prompt is VoiceModels.IntentPrompt<Voice> => !!(prompt && 'text' in prompt && typeof prompt.text === 'string');
