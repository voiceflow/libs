import { ChatVersion } from '@voiceflow/chat-types';

export interface SharedChatSettings extends ChatVersion.Settings {}

export interface ChatSettings extends SharedChatSettings {}

export const defaultSharedChatSettings = (settings: Partial<SharedChatSettings> = {}): SharedChatSettings => ({
  ...ChatVersion.defaultSettings(settings),
});

export const defaultChatSettings = (settings: Partial<ChatSettings> = {}): ChatSettings => ({
  ...defaultSharedChatSettings(settings),
});
