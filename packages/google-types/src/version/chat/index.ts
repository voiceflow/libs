import { DeepPartialByKey } from '@voiceflow/base-types';
import { ChatVersion } from '@voiceflow/chat-types';

import { BasePrototype, defaultSharedBasePlatformData, SharedBasePlatformData } from '../base';
import { ChatPublishing, defaultChatPublishing, defaultSharedChatPublishing, SharedChatPublishing } from './publishing';
import { ChatSettings, defaultChatSettings, defaultSharedChatSettings, SharedChatSettings } from './settings';

export * from './publishing';
export * from './settings';

export interface SharedChatPlatformData extends ChatVersion.PlatformData, SharedBasePlatformData {
  settings: SharedChatSettings;
  publishing: SharedChatPublishing;
}

export interface ChatPlatformData extends SharedChatPlatformData {
  settings: ChatSettings;
  publishing: ChatPublishing;
}

export interface ChatVersion extends ChatVersion.Version<BasePrototype> {
  platformData: ChatPlatformData;
}

export const defaultSharedChatPlatformData = ({
  settings = {},
  publishing = {},
  ...platformData
}: DeepPartialByKey<SharedChatPlatformData, 'settings' | 'publishing'>): SharedChatPlatformData => ({
  ...ChatVersion.defaultPlatformData(platformData),
  ...defaultSharedBasePlatformData(platformData),
  settings: defaultSharedChatSettings(settings),
  publishing: defaultSharedChatPublishing(publishing),
});

export const defaultChatPlatformData = ({
  settings = {},
  publishing = {},
  ...platformData
}: DeepPartialByKey<ChatPlatformData, 'settings' | 'publishing'>): ChatPlatformData => ({
  ...defaultSharedChatPlatformData(platformData),
  settings: defaultChatSettings(settings),
  publishing: defaultChatPublishing(publishing),
});
