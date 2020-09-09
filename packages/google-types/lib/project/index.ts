import { Project } from '@voiceflow/api-sdk';

import { GoogleProjectMemberData } from './member';

export * from './member';

export type GoogleProjectData = {};

export type GoogleProject = Project<GoogleProjectData, GoogleProjectMemberData> & {
  platform: 'google';
};

export const defaultGoogleProjectData = (_: Partial<GoogleProjectData> = {}): GoogleProjectData => ({});
