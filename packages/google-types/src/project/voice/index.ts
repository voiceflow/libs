import { VoiceProject } from '@voiceflow/voice-types';
import type { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import type { VoiceMemberPlatformData } from './member';

export * from './member';

// data shared across all platforms which extend google type
export interface SharedVoicePlatformData extends VoiceProject.PlatformData {}

// google only data
export interface VoicePlatformData extends SharedVoicePlatformData {}

export interface VoiceProject extends VoiceProject.Project<VoiceMemberPlatformData> {
  type: VoiceflowConstants.ProjectType.VOICE;
  platform: VoiceflowConstants.PlatformType.GOOGLE;
  platformData: VoicePlatformData;
}

export const defaultSharedVoicePlatformData = (
  data: Partial<SharedVoicePlatformData> = {}
): SharedVoicePlatformData => ({
  ...VoiceProject.defaultPlatformData(data),
});

export const defaultVoicePlatformData = (data: Partial<VoicePlatformData> = {}): VoicePlatformData => ({
  ...defaultSharedVoicePlatformData(data),
});
