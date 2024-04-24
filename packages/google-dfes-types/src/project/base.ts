import type { Nullable } from '@voiceflow/common';

export interface BaseMemberPlatformData {
  agentName: Nullable<string>;
}

export const defaultBaseMemberPlatformData = ({
  agentName = null,
}: Partial<BaseMemberPlatformData> = {}): BaseMemberPlatformData => ({
  agentName,
});
