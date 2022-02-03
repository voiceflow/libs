import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { SupportedProjectType } from '../project';
import { ChatPlatformData, ChatVersion, defaultChatPlatformData } from './chat';
import { defaultVoicePlatformData, VoicePlatformData, VoiceVersion } from './voice';

export * from './base';
export * from './chat';
export * from './voice';

export interface PlatformDataPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatPlatformData;
  [VoiceflowConstants.ProjectType.VOICE]: VoicePlatformData;
}

export interface VersionPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatVersion;
  [VoiceflowConstants.ProjectType.VOICE]: VoiceVersion;
}

export type Version = VersionPerType[SupportedProjectType];
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
