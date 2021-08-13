import { StrictVersionPlatformData } from '@voiceflow/api-sdk';

import { defaultVersionSettings, VersionSettings } from './settings';

export * from './settings';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VersionData extends StrictVersionPlatformData<VersionSettings> {}

export const defaultVersionData = ({ slots = [], intents = [], settings, publishing = {} }: Partial<VersionData>): VersionData => ({
  slots,
  intents,
  settings: defaultVersionSettings(settings),
  publishing,
});
