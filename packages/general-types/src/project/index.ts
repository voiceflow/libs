import { BasePlatformData } from '@voiceflow/api-sdk';
import { Project } from '@voiceflow/base-types';

export interface GeneralProject extends Project.Project {
  platform: 'general';
}

export const defaultGeneralProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({
  ...Project.defaultProjectData(data),
});
