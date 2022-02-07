import { VoiceProject } from '@voiceflow/voice-types';

import { defaultSharedBaseMemberPlatformData, SharedBaseMemberPlatformData } from '../base';

// data shared across all platforms which extend google type
export interface SharedVoiceMemberPlatformData extends VoiceProject.MemberPlatformData, SharedBaseMemberPlatformData {}

// google only data
export interface VoiceMemberPlatformData extends SharedVoiceMemberPlatformData {}

export const defaultSharedVoiceMemberPlatformData = (data: Partial<SharedVoiceMemberPlatformData> = {}): SharedVoiceMemberPlatformData => ({
  ...defaultSharedBaseMemberPlatformData(data),
});

export const defaultVoiceMemberPlatformData = (data: Partial<VoiceMemberPlatformData> = {}): VoiceMemberPlatformData => ({
  ...defaultSharedVoiceMemberPlatformData(data),
});
