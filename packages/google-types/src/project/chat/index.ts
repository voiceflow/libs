import { ChatProject } from '@voiceflow/chat-types';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { ChatMemberPlatformData } from './member';

export * from './member';

// data shared across all platforms which extend google type
export interface SharedChatPlatformData extends ChatProject.PlatformData {}

// google only data
export interface ChatPlatformData extends SharedChatPlatformData {}

export interface ChatProject extends ChatProject.Project<ChatMemberPlatformData> {
  type: VoiceflowConstants.ProjectType.CHAT;
  platform: VoiceflowConstants.PlatformType.GOOGLE;
  platformData: ChatPlatformData;
}

export const defaultSharedChatPlatformData = (data: Partial<SharedChatPlatformData> = {}): SharedChatPlatformData => ({
  ...ChatProject.defaultPlatformData(data),
});

export const defaultChatPlatformData = (data: Partial<ChatPlatformData> = {}): ChatPlatformData => ({
  ...defaultSharedChatPlatformData(data),
});
