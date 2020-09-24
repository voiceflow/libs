export type GoogleProjectMemberData = {
  /** reference to the external google project ID */
  googleProjectID: string | null;
};

export const defaultGoogleProjectMemberData = (memberData: Partial<GoogleProjectMemberData> = {}): GoogleProjectMemberData => ({
  ...memberData,
  googleProjectID: null,
});
