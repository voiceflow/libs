import type { Intent, Prompt } from '@chat-types/models';
import type { BaseModels, DeepPartialByKey } from '@voiceflow/base-types';
import { BaseVersion } from '@voiceflow/base-types';

import type { Settings } from './settings';
import { defaultSettings } from './settings';

export * from './settings';

export interface PlatformData extends BaseVersion.PlatformData<Prompt> {
  intents: Intent[];
  settings: Settings;
  publishing: BaseVersion.Publishing;
}

export interface Version<Prototype extends BaseModels.Version.Prototype = BaseModels.Version.Prototype>
  extends BaseVersion.Version<Prompt, Prototype> {
  platformData: PlatformData;
}

export const defaultPlatformData = ({
  intents = [],
  settings = {},
  ...data
}: DeepPartialByKey<PlatformData, 'settings'>): PlatformData => ({
  ...BaseVersion.defaultPlatformData<Prompt>(data),
  intents,
  settings: defaultSettings(settings),
});
