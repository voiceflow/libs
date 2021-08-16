/* eslint-disable @typescript-eslint/no-empty-interface */

import { Project } from '@voiceflow/google-types';

export interface GoogleDFESProjectMemberData extends Project.BaseGoogleProjectMemberData {}

export const defaultGoogleDFESProjectMemberData = (memberData: Partial<GoogleDFESProjectMemberData> = {}): GoogleDFESProjectMemberData => ({
  ...Project.defaultBaseGoogleProjectMemberData(memberData),
});
