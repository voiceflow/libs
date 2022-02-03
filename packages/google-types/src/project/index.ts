import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { ChatMemberPlatformData, ChatPlatformData, ChatProject, defaultChatMemberPlatformData, defaultChatPlatformData } from './chat';
import { defaultVoiceMemberPlatformData, defaultVoicePlatformData, VoiceMemberPlatformData, VoicePlatformData, VoiceProject } from './voice';

export * from './base';
export * from './chat';
export * from './voice';

export type SupportedProjectType = VoiceflowConstants.ProjectType.CHAT | VoiceflowConstants.ProjectType.VOICE;

export interface PlatformDataPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatPlatformData;
  [VoiceflowConstants.ProjectType.VOICE]: VoicePlatformData;
}

export interface ProjectPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatProject;
  [VoiceflowConstants.ProjectType.VOICE]: VoiceProject;
}

export interface MemberPlatformDataPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatMemberPlatformData;
  [VoiceflowConstants.ProjectType.VOICE]: VoiceMemberPlatformData;
}

export type Project = ProjectPerType[SupportedProjectType];
export type PlatformData = PlatformDataPerType[SupportedProjectType];
export type MemberPlatformData = MemberPlatformDataPerType[SupportedProjectType];

export const defaultPlatformData = <T extends SupportedProjectType>(type: T, platformData: Partial<PlatformDataPerType[T]>) => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatPlatformData(platformData as ChatPlatformData);
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoicePlatformData(platformData as VoicePlatformData);
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};

export const defaultMemberPlatformData = <T extends SupportedProjectType>(type: T, platformData: Partial<MemberPlatformDataPerType[T]>) => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatMemberPlatformData(platformData as ChatMemberPlatformData);
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoiceMemberPlatformData(platformData as VoiceMemberPlatformData);
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
