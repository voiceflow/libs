import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { ChatPlatformData, ChatProject, defaultChatPlatformData } from './chat';
import { defaultVoicePlatformData, VoicePlatformData, VoiceProject } from './voice';

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

export type Project = ProjectPerType[SupportedProjectType];
export type PlatformData = PlatformDataPerType[SupportedProjectType];

export const defaultPlatformData = <T extends SupportedProjectType>(type: T, platformData: PlatformDataPerType[T]) => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatPlatformData(platformData as ChatPlatformData);
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoicePlatformData(platformData as VoicePlatformData);
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
