import { BaseModels, BaseProject } from '@voiceflow/base-types';

export interface MemberPlatformData extends BaseProject.MemberPlatformData {}

export interface PlatformData extends BaseProject.PlatformData {}

export interface Project<GMemberPlatformData extends MemberPlatformData = MemberPlatformData> extends BaseProject.Project {
  members: BaseModels.Project.Member<GMemberPlatformData>[];
  platformData: PlatformData;
}

export const defaultPlatformData = (data: Partial<PlatformData> = {}): PlatformData => ({
  ...BaseProject.defaultPlatformData(data),
});
