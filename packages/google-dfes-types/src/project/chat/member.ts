import { GoogleProject } from '@voiceflow/google-types';

import { BaseMemberPlatformData, defaultBaseMemberPlatformData } from '../base';

export interface SharedChatMemberPlatformData extends GoogleProject.SharedChatMemberPlatformData {}

export interface ChatMemberPlatformData extends SharedChatMemberPlatformData, BaseMemberPlatformData {}

export const defaultSharedChatMemberPlatformData = (data: Partial<SharedChatMemberPlatformData> = {}): SharedChatMemberPlatformData => ({
  ...GoogleProject.defaultSharedBaseMemberPlatformData(data),
});

export const defaultChatMemberPlatformData = (data: Partial<ChatMemberPlatformData> = {}): ChatMemberPlatformData => ({
  ...defaultSharedChatMemberPlatformData(data),
  ...defaultBaseMemberPlatformData(data),
});
