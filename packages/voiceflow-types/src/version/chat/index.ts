import { DeepPartialByKey } from '@voiceflow/base-types';
import { ChatVersion } from '@voiceflow/chat-types';

import { BasePrototype } from '../base';
import { ChatPublishing } from './publishing';
import { ChatSettings, defaultChatSettings, defaultSharedChatSettings, SharedChatSettings } from './settings';

export * from './publishing';
export * from './settings';

export interface SharedChatPlatformData extends ChatVersion.PlatformData {
  settings: SharedChatSettings;
  publishing: ChatPublishing;
}

export interface ChatPlatformData extends SharedChatPlatformData {
  settings: ChatSettings;
}

export interface ChatVersion extends ChatVersion.Version<BasePrototype> {
  platformData: ChatPlatformData;
}

export const defaultSharedChatPlatformData = ({
  settings,
  ...data
}: DeepPartialByKey<SharedChatPlatformData, 'settings'>): SharedChatPlatformData => ({
  ...ChatVersion.defaultPlatformData(data),
  settings: defaultSharedChatSettings(settings),
});

export const defaultChatPlatformData = ({ settings, ...data }: DeepPartialByKey<ChatPlatformData, 'settings'>): ChatPlatformData => ({
  ...defaultSharedChatPlatformData(data),
  settings: defaultChatSettings(settings),
});
