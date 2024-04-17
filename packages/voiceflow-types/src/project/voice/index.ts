import { VoiceProject } from '@voiceflow/voice-types';
import type { PlatformType, ProjectType } from '@voiceflow-types/constants';

import type { VoiceMemberPlatformData } from './member';

export * from './member';

// data shared across all platforms which extend voiceflow-voice type
export interface SharedVoicePlatformData extends VoiceProject.PlatformData {}

// voiceflow-voice only data
export interface VoicePlatformData extends SharedVoicePlatformData {}

export interface VoiceProject extends VoiceProject.Project<VoiceMemberPlatformData> {
  type: ProjectType.VOICE;
  platform: PlatformType.VOICEFLOW;
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
