import { Project } from '@voiceflow/google-types';

import { Nullable } from '@/../../api-sdk/build';

export interface GoogleDFESProjectMemberData extends Project.BaseGoogleProjectMemberData {
  agentName: Nullable<string>;
}

export const defaultGoogleDFESProjectMemberData = (memberData: Partial<GoogleDFESProjectMemberData> = {}): GoogleDFESProjectMemberData => ({
  ...Project.defaultBaseGoogleProjectMemberData(memberData),
});
