import { Project } from '@voiceflow/google-types';

import { GoogleDFESProjectMemberData } from './member';

export * from './member';

export interface GoogleDFESProject extends Project.BaseGoogleProject<GoogleDFESProjectMemberData> {
  platform: 'df-es';
}

export const defaultGoogleDFESProjectData = (projectData: Partial<Project.BaseGooglePlatformData> = {}): Project.BaseGooglePlatformData => ({
  ...Project.defaultBaseGoogleProjectData(projectData),
});
