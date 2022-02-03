import { ProjectType } from '@/constants';

import { ChatPlatformData, ChatProject, defaultChatPlatformData } from './chat';
import { defaultVoicePlatformData, VoicePlatformData, VoiceProject } from './voice';

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

export type Project = ProjectPerType[SupportedProjectType];
export type PlatformData = PlatformDataPerType[SupportedProjectType];

export const defaultPlatformData = <T extends SupportedProjectType>(type: T, platformData: PlatformDataPerType[T]) => {
  switch (type) {
    case ProjectType.CHAT:
      return defaultChatPlatformData(platformData as ChatPlatformData);
    case ProjectType.VOICE:
      return defaultVoicePlatformData(platformData as VoicePlatformData);
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
