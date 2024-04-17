import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import type { SupportedProjectType } from '../project';
import type { ChatPlatformData, ChatPublishing, ChatSettings, ChatVersion } from './chat';
import { defaultChatPlatformData, defaultChatPublishing, defaultChatSettings } from './chat';
import type { VoicePlatformData, VoicePublishing, VoiceSettings, VoiceVersion } from './voice';
import { defaultVoicePlatformData, defaultVoicePublishing, defaultVoiceSettings } from './voice';

export * from './base';
export * from './chat';
export * from './voice';

export interface PlatformDataPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatPlatformData;
  [VoiceflowConstants.ProjectType.VOICE]: VoicePlatformData;
}

export interface SettingsPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatSettings;
  [VoiceflowConstants.ProjectType.VOICE]: VoiceSettings;
}

export interface PublishingPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatPublishing;
  [VoiceflowConstants.ProjectType.VOICE]: VoicePublishing;
}

export interface VersionPerType {
  [VoiceflowConstants.ProjectType.CHAT]: ChatVersion;
  [VoiceflowConstants.ProjectType.VOICE]: VoiceVersion;
}

export type Version = VersionPerType[SupportedProjectType];
export type Settings = SettingsPerType[SupportedProjectType];
export type Publishing = PublishingPerType[SupportedProjectType];
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

export const defaultSettings = <T extends SupportedProjectType>(type: T, platformData: SettingsPerType[T]) => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatSettings(platformData as ChatSettings);
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoiceSettings(platformData as VoiceSettings);
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};

export const defaultPublishing = <T extends SupportedProjectType>(type: T, platformData: PublishingPerType[T]) => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatPublishing(platformData as ChatPublishing);
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoicePublishing(platformData as VoicePublishing);
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
