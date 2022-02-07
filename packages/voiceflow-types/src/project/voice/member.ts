import { VoiceProject } from '@voiceflow/voice-types';

// data shared across all platforms which extend voiceflow-voice type
export interface SharedVoiceMemberPlatformData extends VoiceProject.MemberPlatformData {}

// voiceflow-voice only data
export interface VoiceMemberPlatformData extends SharedVoiceMemberPlatformData {}

export const defaultSharedVoiceMemberPlatformData = (data: Partial<SharedVoiceMemberPlatformData> = {}): SharedVoiceMemberPlatformData => ({
  ...data,
});

export const defaultVoiceMemberPlatformData = (data: Partial<VoiceMemberPlatformData> = {}): VoiceMemberPlatformData => ({
  ...defaultSharedVoiceMemberPlatformData(data),
});
