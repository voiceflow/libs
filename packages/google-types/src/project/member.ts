import { Nullable } from '@voiceflow/api-sdk';

export interface GoogleProjectMemberData {
  /** reference to the external google project ID */
  googleProjectID: Nullable<string>;
}

export const defaultGoogleProjectMemberData = (memberData: Partial<GoogleProjectMemberData> = {}): GoogleProjectMemberData => ({
  ...memberData,
  googleProjectID: null,
});
