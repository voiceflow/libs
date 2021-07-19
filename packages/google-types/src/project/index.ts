import { Project, UnknownRecord } from '@voiceflow/api-sdk';

import { DFESProjectMemberData, GoogleProjectMemberData } from './member';

export * from './member';

// gactions
export type GoogleProjectData = UnknownRecord;

export interface GoogleProject extends Project<GoogleProjectData, GoogleProjectMemberData> {
  platform: 'google';
}

export const defaultGoogleProjectData = (projectData: Partial<GoogleProjectData> = {}): GoogleProjectData => ({
  ...projectData,
});

// dialogflow es
export type DFESProjectData = UnknownRecord;

export interface DFESProject extends Project<DFESProjectData, DFESProjectMemberData> {
  platform: 'df-es';
}

export const defaultDFESProjectData = (projectData: Partial<DFESProjectData> = {}): DFESProjectData => ({
  ...projectData,
});
