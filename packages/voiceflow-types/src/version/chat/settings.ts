import { BaseVersion } from '@voiceflow/base-types';
import { ChatVersion } from '@voiceflow/chat-types';

import { BaseSettings, defaultBaseSettings } from '../base';

export interface SharedChatSettings extends ChatVersion.Settings {}

export interface ChatSettings extends SharedChatSettings, BaseSettings {}

export interface ChatPublishing extends BaseVersion.Publishing {
  title?: string;
  image?: string;
  color?: string;
  avatar?: string;
  spacing?: { side: number; bottom: number };
  launcher?: string;
  position?: string;
  persistence?: boolean;
  description?: string;
}

export const defaultSharedChatSettings = (settings: Partial<SharedChatSettings> = {}): SharedChatSettings => ({
  ...ChatVersion.defaultSettings(settings),
});

export const defaultChatSettings = (settings: Partial<ChatSettings> = {}): ChatSettings => ({
  ...defaultSharedChatSettings(settings),
  ...defaultBaseSettings(settings),
});
