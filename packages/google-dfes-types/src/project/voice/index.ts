import { GoogleProject } from '@voiceflow/google-types';
import { VoiceProject } from '@voiceflow/voice-types';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

import { VoiceMemberPlatformData } from './member';

export * from './member';

export interface SharedVoicePlatformData extends GoogleProject.SharedVoicePlatformData {}

export interface VoicePlatformData extends SharedVoicePlatformData {}

export interface VoiceProject extends VoiceProject.Project<VoiceMemberPlatformData> {
  type: VoiceflowConstants.ProjectType.VOICE;
  platform: VoiceflowConstants.PlatformType.DIALOGFLOW_ES;
  platformData: VoicePlatformData;
}

export const defaultSharedVoicePlatformData = (data: Partial<SharedVoicePlatformData> = {}): SharedVoicePlatformData => ({
  ...GoogleProject.defaultSharedVoicePlatformData(data),
});

export const defaultVoicePlatformData = (data: Partial<VoicePlatformData> = {}): VoicePlatformData => ({
  ...defaultSharedVoicePlatformData(data),
});
