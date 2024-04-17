import type { ChatProject } from '@voiceflow/chat-types';

import type { SharedBaseMemberPlatformData } from '../base';
import { defaultSharedBaseMemberPlatformData } from '../base';

// data shared across all platforms which extend google type
export interface SharedChatMemberPlatformData extends ChatProject.MemberPlatformData, SharedBaseMemberPlatformData {}

// google only data
export interface ChatMemberPlatformData extends SharedChatMemberPlatformData {}

export const defaultSharedChatMemberPlatformData = (
  data: Partial<SharedChatMemberPlatformData> = {}
): SharedChatMemberPlatformData => ({
  ...defaultSharedBaseMemberPlatformData(data),
});

export const defaultChatMemberPlatformData = (data: Partial<ChatMemberPlatformData> = {}): ChatMemberPlatformData => ({
  ...defaultSharedChatMemberPlatformData(data),
});
