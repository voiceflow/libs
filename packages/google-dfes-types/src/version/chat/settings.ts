import { GoogleVersion } from '@voiceflow/google-types';

export interface SharedChatSettings extends GoogleVersion.SharedChatSettings {}

export interface ChatSettings extends SharedChatSettings {}

export const defaultSharedChatSettings = (settings: Partial<SharedChatSettings> = {}): SharedChatSettings => ({
  ...GoogleVersion.defaultSharedChatSettings(settings),
});

export const defaultChatSettings = (settings: Partial<ChatSettings> = {}): ChatSettings => ({
  ...defaultSharedChatSettings(settings),
});
