import { ProjectType } from '@/constants';

import { SupportedProjectType } from '../project';
import { ChatPlatformData, ChatVersion, defaultChatPlatformData } from './chat';
import { defaultVoicePlatformData, VoicePlatformData, VoiceVersion } from './voice';

export * from './base';
export * from './chat';
export * from './voice';

export interface PlatformDataPerType {
  [ProjectType.CHAT]: ChatPlatformData;
  [ProjectType.VOICE]: VoicePlatformData;
}

export interface VersionPerType {
  [ProjectType.CHAT]: ChatVersion;
  [ProjectType.VOICE]: VoiceVersion;
}

export type Version = VersionPerType[SupportedProjectType];
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
