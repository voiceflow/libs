import { BasePlatformData, Project } from '@voiceflow/api-sdk';

export type GeneralProject = Project<BasePlatformData, BasePlatformData> & {
  platform: 'general';
};

export const defaultAlexaProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({ ...data });
