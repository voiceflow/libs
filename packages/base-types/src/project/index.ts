import { Project as ProjectModels } from '@/models';
import { AnyRecord } from '@/utils';

export interface PlatformData extends AnyRecord {}

export interface MemberPlatformData extends AnyRecord {}

export interface Project extends ProjectModels.Model<PlatformData, MemberPlatformData> {}

export const defaultPlatformData = (data: Partial<PlatformData> = {}): PlatformData => ({ ...data });
