import { ChatVersion } from '@voiceflow/chat-types';

import { BaseSettings, defaultBaseSettings } from '../base';

export interface SharedChatSettings extends ChatVersion.Settings {}

export interface ChatSettings extends SharedChatSettings, BaseSettings {}

export const defaultSharedChatSettings = (settings: Partial<SharedChatSettings> = {}): SharedChatSettings => ({
  ...ChatVersion.defaultSettings(settings),
});

export const defaultChatSettings = (settings: Partial<ChatSettings> = {}): ChatSettings => ({
  ...defaultSharedChatSettings(settings),
  ...defaultBaseSettings(settings),
});
