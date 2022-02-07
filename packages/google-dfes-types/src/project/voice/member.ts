import { GoogleProject } from '@voiceflow/google-types';

import { BaseMemberPlatformData, defaultBaseMemberPlatformData } from '../base';

export interface SharedVoiceMemberPlatformData extends GoogleProject.SharedVoiceMemberPlatformData {}

export interface VoiceMemberPlatformData extends SharedVoiceMemberPlatformData, BaseMemberPlatformData {}

export const defaultSharedVoiceMemberPlatformData = (data: Partial<SharedVoiceMemberPlatformData> = {}): SharedVoiceMemberPlatformData => ({
  ...GoogleProject.defaultSharedBaseMemberPlatformData(data),
});

export const defaultVoiceMemberPlatformData = (data: Partial<VoiceMemberPlatformData> = {}): VoiceMemberPlatformData => ({
  ...defaultSharedVoiceMemberPlatformData(data),
  ...defaultBaseMemberPlatformData(data),
});
