/* eslint-disable @typescript-eslint/no-empty-interface */
import { StrictVersionPlatformData, Version } from '@/models';

import { BaseVersionSettings, defaultBaseVersionSettings } from './settings';

export * from './settings';

export interface BaseVersionData<Prompt = unknown> extends StrictVersionPlatformData<BaseVersionSettings<Prompt>> {}

export interface BaseVersion<Prompt = unknown> extends Version<BaseVersionData<Prompt>> {}

export const defaultBaseVersionData = <Prompt>({
  slots = [],
  intents = [],
  settings,
  publishing = {},
}: Partial<BaseVersionData<Prompt>>): BaseVersionData<Prompt> => ({
  slots,
  intents,
  settings: defaultBaseVersionSettings(settings),
  publishing,
});
