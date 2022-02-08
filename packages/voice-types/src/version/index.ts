import { Intent, Prompt } from '@voice-types/models';
import { BaseModels, BaseVersion, DeepPartialByKey } from '@voiceflow/base-types';

import { defaultSettings, DefaultSettingsParams, Settings } from './settings';

export * from './settings';

export interface PlatformData<Voice> extends BaseVersion.PlatformData<Prompt<Voice>> {
  intents: Intent<Voice>[];
  settings: Settings<Voice>;
}

export interface Version<Voice, Prototype extends BaseModels.Version.Prototype = BaseModels.Version.Prototype>
  extends BaseVersion.Version<Prompt<Voice>, Prototype> {
  platformData: PlatformData<Voice>;
}

export const defaultPlatformData = <Voice>(
  { intents = [], settings = {}, ...data }: DeepPartialByKey<PlatformData<Voice>, 'settings'>,
  params: DefaultSettingsParams<Voice>
): PlatformData<Voice> => ({
  ...BaseVersion.defaultPlatformData<Prompt<Voice>>(data),
  intents,
  settings: defaultSettings<Voice>(settings, params),
});
