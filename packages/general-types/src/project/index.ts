import { BasePlatformData } from '@voiceflow/api-sdk';
import { Project } from '@voiceflow/voice-types';

export interface GeneralProject extends Project.VoiceProject {
  platform: 'general';
}

export const defaultGeneralProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({
  ...Project.defaultVoiceProjectData(data),
});
