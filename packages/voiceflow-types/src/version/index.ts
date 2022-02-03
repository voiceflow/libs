import { ProjectType } from '@/constants';

import { SupportedProjectType } from '../project';
import { ChatPlatformData, ChatSettings, ChatVersion, defaultChatPlatformData, defaultChatSettings } from './chat';
import { defaultVoicePlatformData, defaultVoiceSettings, VoicePlatformData, VoiceSettings, VoiceVersion } from './voice';

export * from './base';
export * from './chat';
export * from './voice';

export interface PlatformDataPerType {
  [ProjectType.CHAT]: ChatPlatformData;
  [ProjectType.VOICE]: VoicePlatformData;
}

export interface SettingsPerType {
  [ProjectType.CHAT]: ChatSettings;
  [ProjectType.VOICE]: VoiceSettings;
}

export interface VersionPerType {
  [ProjectType.CHAT]: ChatVersion;
  [ProjectType.VOICE]: VoiceVersion;
}

export type Version = VersionPerType[SupportedProjectType];
export type Settings = SettingsPerType[SupportedProjectType];
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

export const defaultSettings = <T extends SupportedProjectType>(type: T, platformData: SettingsPerType[T]) => {
  switch (type) {
    case ProjectType.CHAT:
      return defaultChatSettings(platformData as ChatSettings);
    case ProjectType.VOICE:
      return defaultVoiceSettings(platformData as VoiceSettings);
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
