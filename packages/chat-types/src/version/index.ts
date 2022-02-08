import { Intent, Prompt } from '@chat-types/models';
import { BaseModels, BaseVersion, DeepPartialByKey } from '@voiceflow/base-types';

import { defaultSettings, Settings } from './settings';

export * from './settings';

export interface PlatformData extends BaseVersion.PlatformData<Prompt> {
  intents: Intent[];
  settings: Settings;
}

export interface Version<Prototype extends BaseModels.Version.Prototype = BaseModels.Version.Prototype>
  extends BaseVersion.Version<Prompt, Prototype> {
  platformData: PlatformData;
}

export const defaultPlatformData = ({ intents = [], settings = {}, ...data }: DeepPartialByKey<PlatformData, 'settings'>): PlatformData => ({
  ...BaseVersion.defaultPlatformData<Prompt>(data),
  intents,
  settings: defaultSettings(settings),
});
