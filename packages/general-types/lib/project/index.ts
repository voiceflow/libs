import { BasePlatformData, Project } from '@voiceflow/api-sdk';

export type GeneralProject = Project<BasePlatformData, BasePlatformData> & {
  platform: 'general';
};

export const defaultGeneralProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({ ...data });
