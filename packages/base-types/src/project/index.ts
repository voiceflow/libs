import { Project as ProjectModels } from '@base-types/models';
import { AnyRecord } from '@voiceflow/common';

export interface PlatformData extends AnyRecord {}

export interface MemberPlatformData extends AnyRecord {}

export interface Project extends ProjectModels.Model<PlatformData, MemberPlatformData> {}

export const defaultPlatformData = (data: Partial<PlatformData> = {}): PlatformData => ({ ...data });
