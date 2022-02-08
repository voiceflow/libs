import { Project as ProjectModels } from '@base-types/models';
import { AnyRecord } from '@base-types/types';

export interface PlatformData extends AnyRecord {}

export interface MemberPlatformData extends AnyRecord {}

export interface Project extends ProjectModels.Model<PlatformData, MemberPlatformData> {}

export const defaultPlatformData = (data: Partial<PlatformData> = {}): PlatformData => ({ ...data });
