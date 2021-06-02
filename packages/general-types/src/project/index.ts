import { BasePlatformData, Project } from '@voiceflow/api-sdk';

export interface GeneralProject extends Project<BasePlatformData, BasePlatformData> {
  platform: 'general';
}

export const defaultGeneralProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({ ...data });
