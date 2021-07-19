import { Nullable } from '@voiceflow/api-sdk';

// gactions
export interface GoogleProjectMemberData {
  /** reference to the external google project ID */
  googleProjectID: Nullable<string>;
}

export const defaultGoogleProjectMemberData = (memberData: Partial<GoogleProjectMemberData> = {}): GoogleProjectMemberData => ({
  ...memberData,
  googleProjectID: null,
});

// dialogflow es
export interface DFESProjectMemberData {
  /** reference to the external google project ID */
  googleProjectID: Nullable<string>;
}

export const defaultDFESProjectMemberData = (memberData: Partial<DFESProjectMemberData> = {}): DFESProjectMemberData => ({
  ...memberData,
  googleProjectID: null,
});
