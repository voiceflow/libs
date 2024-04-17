import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import type { ChatMemberPlatformData, ChatPlatformData, ChatProject } from './chat';
import { defaultChatMemberPlatformData, defaultChatPlatformData } from './chat';
import type { VoiceMemberPlatformData, VoicePlatformData, VoiceProject } from './voice';
import { defaultVoiceMemberPlatformData, defaultVoicePlatformData } from './voice';

export type SupportedProjectType = VoiceflowConstants.ProjectType.CHAT | VoiceflowConstants.ProjectType.VOICE;

export * from './base';
export * from './chat';
export * from './voice';

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

export const defaultPlatformData = <T extends SupportedProjectType>(
  type: T,
  platformData: Partial<PlatformDataPerType[T]>
): PlatformDataPerType[T] => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatPlatformData(platformData as Partial<ChatPlatformData>) as PlatformDataPerType[T];
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoicePlatformData(platformData as Partial<VoicePlatformData>) as PlatformDataPerType[T];
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};

export const defaultMemberPlatformData = <T extends SupportedProjectType>(
  type: T,
  platformData: Partial<MemberPlatformDataPerType[T]>
): MemberPlatformDataPerType[T] => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatMemberPlatformData(
        platformData as Partial<ChatMemberPlatformData>
      ) as MemberPlatformDataPerType[T];
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoiceMemberPlatformData(
        platformData as Partial<VoiceMemberPlatformData>
      ) as MemberPlatformDataPerType[T];
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
