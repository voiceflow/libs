import { ChatVersion } from '@voiceflow/chat-types';

import type { BaseSettings } from '../base';
import { defaultBaseSettings } from '../base';

export interface SharedChatSettings extends ChatVersion.Settings {
  defaultVoice?: string;
}

export interface ChatSettings extends SharedChatSettings, BaseSettings {}

export const defaultSharedChatSettings = (settings: Partial<SharedChatSettings> = {}): SharedChatSettings => ({
  ...ChatVersion.defaultSettings(settings),
});

export const defaultChatSettings = (settings: Partial<ChatSettings> = {}): ChatSettings => ({
  ...defaultSharedChatSettings(settings),
  ...defaultBaseSettings(settings),
});
