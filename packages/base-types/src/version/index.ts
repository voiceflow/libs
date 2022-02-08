import { Version as VersionModels } from '@base-types/models';
import { DeepPartialByKey } from '@base-types/types';

import { defaultSettings, Settings } from './settings';

export * from './settings';

export interface PlatformData<Prompt = unknown> extends VersionModels.PlatformData<Settings<Prompt>> {}

export interface Version<Prompt = unknown, Prototype extends VersionModels.Prototype = VersionModels.Prototype>
  extends VersionModels.Model<PlatformData<Prompt>> {
  prototype?: Prototype;
}

export const defaultPlatformData = <Prompt>({
  slots = [],
  intents = [],
  settings = {},
  publishing = {},
}: DeepPartialByKey<PlatformData<Prompt>, 'settings'>): PlatformData<Prompt> => ({
  slots,
  intents,
  settings: defaultSettings(settings),
  publishing,
});
