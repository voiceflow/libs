import { Models } from '@voiceflow/base-types';
import { Project } from '@voiceflow/voice-types';

export interface GeneralProject extends Project.VoiceProject {
  platform: 'general';
}

export const defaultGeneralProjectData = (data: Partial<Models.BasePlatformData> = {}): Models.BasePlatformData => ({
  ...Project.defaultVoiceProjectData(data),
});
