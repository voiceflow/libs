import { Version as VersionModels } from '@base-types/models';
import { DeepPartialByKey } from '@base-types/types';

import { Publishing } from './publishing';
import { defaultSettings, Settings } from './settings';

export * from './publishing';
export * from './settings';
export * from './tag';

export interface PlatformData<Prompt = unknown> extends VersionModels.PlatformData<Settings<Prompt>, Publishing> {}

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
