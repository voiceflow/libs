import { Nullable } from '@voiceflow/base-types';

// shared across google and dfes types
export interface SharedBaseMemberPlatformData {
  /** reference to the external google project ID */
  googleProjectID: Nullable<string>;
}

export const defaultSharedBaseMemberPlatformData = ({
  googleProjectID = null,
  ...platformData
}: Partial<SharedBaseMemberPlatformData> = {}): SharedBaseMemberPlatformData => ({
  ...platformData,
  googleProjectID,
});
