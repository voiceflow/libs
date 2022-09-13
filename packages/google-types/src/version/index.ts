import { DeepPartialByKey } from '@voiceflow/base-types';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { SupportedProjectType } from '../project';
import {
  ChatPlatformData,
  ChatPublishing,
  ChatSettings,
  ChatVersion,
  defaultChatPlatformData,
  defaultChatPublishing,
  defaultChatSettings,
} from './chat';
import {
  defaultVoicePlatformData,
  defaultVoicePublishing,
  defaultVoiceSettings,
  VoicePlatformData,
  VoicePublishing,
  VoiceSettings,
  VoiceVersion,
} from './voice';

export * from './base';
export * from './chat';
export * from './prototype';
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

export const defaultPlatformData = <T extends SupportedProjectType>(
  type: T,
  platformData: DeepPartialByKey<PlatformDataPerType[T], 'settings' | 'publishing'>
): PlatformDataPerType[T] => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatPlatformData(platformData as DeepPartialByKey<ChatPlatformData, 'settings' | 'publishing'>) as PlatformDataPerType[T];
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoicePlatformData(platformData as DeepPartialByKey<VoicePlatformData, 'settings' | 'publishing'>) as PlatformDataPerType[T];
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};

export const defaultSettings = <T extends SupportedProjectType>(type: T, platformData: Partial<SettingsPerType[T]>): SettingsPerType[T] => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatSettings(platformData as Partial<ChatSettings>) as SettingsPerType[T];
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoiceSettings(platformData as Partial<VoiceSettings>) as SettingsPerType[T];
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};

export const defaultPublishing = <T extends SupportedProjectType>(type: T, platformData: Partial<PublishingPerType[T]>): PublishingPerType[T] => {
  switch (type) {
    case VoiceflowConstants.ProjectType.CHAT:
      return defaultChatPublishing(platformData as Partial<ChatPublishing>) as PublishingPerType[T];
    case VoiceflowConstants.ProjectType.VOICE:
      return defaultVoicePublishing(platformData as Partial<VoicePublishing>) as PublishingPerType[T];
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
