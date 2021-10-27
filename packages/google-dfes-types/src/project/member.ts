import { Nullable } from '@voiceflow/base-types';
import { Project } from '@voiceflow/google-types';

export interface GoogleDFESProjectMemberData extends Project.BaseGoogleProjectMemberData {
  agentName: Nullable<string>;
}

export const defaultGoogleDFESProjectMemberData = (memberData: Partial<GoogleDFESProjectMemberData> = {}): GoogleDFESProjectMemberData => ({
  ...Project.defaultBaseGoogleProjectMemberData(memberData),
  agentName: null,
});
