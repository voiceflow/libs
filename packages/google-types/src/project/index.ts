import { Project, UnknownRecord } from '@voiceflow/api-sdk';

import { GoogleProjectMemberData } from './member';

export * from './member';

export type GoogleProjectData = UnknownRecord;

export interface GoogleProject extends Project<GoogleProjectData, GoogleProjectMemberData> {
  platform: 'google';
}

export const defaultGoogleProjectData = (projectData: Partial<GoogleProjectData> = {}): GoogleProjectData => ({
  ...projectData,
});
