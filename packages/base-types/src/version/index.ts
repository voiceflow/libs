/* eslint-disable @typescript-eslint/no-empty-interface */
import { StrictVersionPlatformData, Version as BaseVersion } from '@voiceflow/api-sdk';

import { defaultVersionSettings, VersionSettings } from './settings';

export * from './settings';

export interface VersionData extends StrictVersionPlatformData<VersionSettings> {}

export interface Version extends BaseVersion<VersionData> {}

export const defaultVersionData = ({ slots = [], intents = [], settings, publishing = {} }: Partial<VersionData>): VersionData => ({
  slots,
  intents,
  settings: defaultVersionSettings(settings),
  publishing,
});
