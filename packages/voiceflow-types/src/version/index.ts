import type { DeepPartialByKey } from '@voiceflow/base-types';
import { ProjectType } from '@voiceflow-types/constants';

import type { SupportedProjectType } from '../project';
import type { ChatPlatformData, ChatSettings, ChatVersion } from './chat';
import { defaultChatPlatformData, defaultChatSettings } from './chat';
import type { VoicePlatformData, VoiceSettings, VoiceVersion } from './voice';
import { defaultVoicePlatformData, defaultVoiceSettings } from './voice';

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

export type Intent = PlatformData['intents'] extends (infer I)[] ? I : never;

export const defaultPlatformData = <T extends SupportedProjectType>(
  type: T,
  platformData: DeepPartialByKey<PlatformDataPerType[T], 'settings'>
): PlatformDataPerType[T] => {
  switch (type) {
    case ProjectType.CHAT:
      return defaultChatPlatformData(
        platformData as DeepPartialByKey<ChatPlatformData, 'settings'>
      ) as PlatformDataPerType[T];
    case ProjectType.VOICE:
      return defaultVoicePlatformData(
        platformData as DeepPartialByKey<VoicePlatformData, 'settings'>
      ) as PlatformDataPerType[T];
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};

export const defaultSettings = <T extends SupportedProjectType>(
  type: T,
  platformData: Partial<SettingsPerType[T]>
): SettingsPerType[T] => {
  switch (type) {
    case ProjectType.CHAT:
      return defaultChatSettings(platformData as Partial<ChatSettings>) as SettingsPerType[T];
    case ProjectType.VOICE:
      return defaultVoiceSettings(platformData as Partial<VoiceSettings>) as SettingsPerType[T];
    default:
      throw new Error(`Unknown project type: ${type}`);
  }
};
