import { ProjectType } from '@/constants';

import { ChatMemberPlatformData, ChatPlatformData, ChatProject, defaultChatMemberPlatformData, defaultChatPlatformData } from './chat';
import { defaultVoiceMemberPlatformData, defaultVoicePlatformData, VoiceMemberPlatformData, VoicePlatformData, VoiceProject } from './voice';

export * from './chat';
export * from './voice';

export type SupportedProjectType = ProjectType.CHAT | ProjectType.VOICE;

export interface PlatformDataPerType {
  [ProjectType.CHAT]: ChatPlatformData;
  [ProjectType.VOICE]: VoicePlatformData;
}

export interface ProjectPerType {
  [ProjectType.CHAT]: ChatProject;
  [ProjectType.VOICE]: VoiceProject;
}

export interface MemberPlatformDataPerType {
  [ProjectType.CHAT]: ChatMemberPlatformData;
  [ProjectType.VOICE]: VoiceMemberPlatformData;
}

export type Project = ProjectPerType[SupportedProjectType];
export type PlatformData = PlatformDataPerType[SupportedProjectType];
export type MemberPlatformData = MemberPlatformDataPerType[SupportedProjectType];

export const defaultPlatformData = <T extends SupportedProjectType>(
  type: T,
  platformData: Partial<PlatformDataPerType[T]>
): PlatformDataPerType[T] => {
  switch (type) {
    case ProjectType.CHAT:
      return defaultChatPlatformData(platformData as Partial<ChatPlatformData>) as PlatformDataPerType[T];
    case ProjectType.VOICE:
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
    case ProjectType.CHAT:
      return defaultChatMemberPlatformData(platformData as Partial<ChatMemberPlatformData>) as MemberPlatformDataPerType[T];
    case ProjectType.VOICE:
      return defaultVoiceMemberPlatformData(platformData as Partial<VoiceMemberPlatformData>) as MemberPlatformDataPerType[T];
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
