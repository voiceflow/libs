import { BasePlatformData, Project as BaseProject } from '@voiceflow/api-sdk';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Project extends BaseProject<BasePlatformData, BasePlatformData> {}

export const defaultProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({ ...data });
