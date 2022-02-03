import { ChatModels } from '@voiceflow/chat-types';
import { VoiceModels } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

import { ChatStep, ChatStepData } from './chat';
import { VoiceStep, VoiceStepData } from './voice';

export * from './chat';
export * from './voice';

export type Step = ChatStep | VoiceStep;
export type StepData = ChatStepData | VoiceStepData;

export type AnyPrompt = VoiceModels.Prompt<Voice> | ChatModels.Prompt | VoiceModels.IntentPrompt<string>;

export const isChatPrompt = (prompt?: AnyPrompt | null): prompt is ChatModels.Prompt =>
  !!(prompt && 'content' in prompt && Array.isArray(prompt.content));

export const isVoicePrompt = (prompt?: AnyPrompt | null): prompt is VoiceModels.Prompt<Voice> =>
  !!(prompt && 'content' in prompt && typeof prompt.content === 'string');

export const isIntentVoicePrompt = (prompt?: AnyPrompt | null): prompt is VoiceModels.IntentPrompt<Voice> =>
  !!(prompt && 'text' in prompt && typeof prompt.text === 'string');
