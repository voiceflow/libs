import { ChatProject } from '@voiceflow/chat-types';
import type { PlatformType, ProjectType } from '@voiceflow-types/constants';

import type { ChatMemberPlatformData } from './member';

export * from './member';

// data shared across all platforms which extend voiceflow-chat type
export interface SharedChatPlatformData extends ChatProject.PlatformData {}

// voiceflow-chat only data
export interface ChatPlatformData extends SharedChatPlatformData {}

export interface ChatProject extends ChatProject.Project<ChatMemberPlatformData> {
  type: ProjectType.CHAT;
  platform: PlatformType.VOICEFLOW;
  platformData: ChatPlatformData;
}

export const defaultSharedChatPlatformData = (data: Partial<SharedChatPlatformData> = {}): SharedChatPlatformData => ({
  ...ChatProject.defaultPlatformData(data),
});

export const defaultChatPlatformData = (data: Partial<ChatPlatformData> = {}): ChatPlatformData => ({
  ...defaultSharedChatPlatformData(data),
});
