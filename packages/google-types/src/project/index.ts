/* eslint-disable @typescript-eslint/no-empty-interface */
import { BasePlatformData, Project } from '@voiceflow/base-types';

import { BaseGoogleProjectMemberData, GoogleProjectMemberData } from './member';

export * from './member';

// base is used in google-dfes types

export interface BaseGooglePlatformData extends BasePlatformData {}

export interface BaseGoogleProject<MemberData extends BaseGoogleProjectMemberData> extends Project<BaseGooglePlatformData, MemberData> {}

export const defaultBaseGoogleProjectData = (projectData: Partial<BaseGooglePlatformData> = {}): BaseGooglePlatformData => ({
  ...projectData,
});

export interface GooglePlatformData extends BaseGooglePlatformData {}
export interface GoogleProject extends BaseGoogleProject<GoogleProjectMemberData> {
  platform: 'google';
}

export const defaultGoogleProjectData = (projectData: Partial<GooglePlatformData> = {}): GooglePlatformData => ({
  ...defaultBaseGoogleProjectData(projectData),
});
