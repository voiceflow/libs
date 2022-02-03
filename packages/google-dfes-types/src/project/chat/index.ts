import { ChatProject } from '@voiceflow/chat-types';
import { GoogleProject } from '@voiceflow/google-types';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { ChatMemberPlatformData } from './member';

export * from './member';

export interface SharedChatPlatformData extends GoogleProject.SharedChatPlatformData {}

export interface ChatPlatformData extends SharedChatPlatformData {}

export interface ChatProject extends ChatProject.Project<ChatMemberPlatformData> {
  type: VoiceflowConstants.ProjectType.CHAT;
  platform: VoiceflowConstants.PlatformType.DIALOGFLOW_ES;
  platformData: ChatPlatformData;
}

export const defaultSharedChatPlatformData = (data: Partial<SharedChatPlatformData> = {}): SharedChatPlatformData => ({
  ...GoogleProject.defaultSharedChatPlatformData(data),
});

export const defaultChatPlatformData = (data: Partial<ChatPlatformData> = {}): ChatPlatformData => ({
  ...defaultSharedChatPlatformData(data),
});
