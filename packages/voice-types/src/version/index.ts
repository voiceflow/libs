import type { Intent, Prompt } from '@voice-types/models';
import type { BaseModels, DeepPartialByKey } from '@voiceflow/base-types';
import { BaseVersion } from '@voiceflow/base-types';

import type { DefaultSettingsParams, Settings } from './settings';
import { defaultSettings } from './settings';

export * from './settings';

export interface PlatformData<Voice extends string> extends BaseVersion.PlatformData<Prompt<Voice>> {
  intents: Intent<Voice>[];
  settings: Settings<Voice>;
}

export interface Version<
  Voice extends string,
  Prototype extends BaseModels.Version.Prototype = BaseModels.Version.Prototype,
> extends BaseVersion.Version<Prompt<Voice>, Prototype> {
  platformData: PlatformData<Voice>;
}

export const defaultPlatformData = <Voice extends string>(
  { intents = [], settings = {}, ...data }: DeepPartialByKey<PlatformData<Voice>, 'settings'>,
  params: DefaultSettingsParams<Voice>
): PlatformData<Voice> => ({
  ...BaseVersion.defaultPlatformData<Prompt<Voice>>(data),
  intents,
  settings: defaultSettings<Voice>(settings, params),
});
