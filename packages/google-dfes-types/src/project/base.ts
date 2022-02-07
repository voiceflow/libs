import { Nullable } from '@voiceflow/base-types';

export interface BaseMemberPlatformData {
  agentName: Nullable<string>;
}

export const defaultBaseMemberPlatformData = ({ agentName = null }: Partial<BaseMemberPlatformData> = {}): BaseMemberPlatformData => ({
  agentName,
});
