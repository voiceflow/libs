import { Nullable } from '@voiceflow/base-types';

// base is used in google-dfes types

export interface BaseGoogleProjectMemberData {
  /** reference to the external google project ID */
  googleProjectID: Nullable<string>;
}

export const defaultBaseGoogleProjectMemberData = (memberData: Partial<BaseGoogleProjectMemberData> = {}): BaseGoogleProjectMemberData => ({
  ...memberData,
  googleProjectID: null,
});

export interface GoogleProjectMemberData extends BaseGoogleProjectMemberData {}

export const defaultGoogleProjectMemberData = (memberData: Partial<GoogleProjectMemberData> = {}): GoogleProjectMemberData => ({
  ...defaultBaseGoogleProjectMemberData(memberData),
});
