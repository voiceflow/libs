import { BasePlatformData, Project } from '@/models';

export interface BaseProject extends Project<BasePlatformData, BasePlatformData> {}

export const defaultBaseProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({ ...data });
