import type { Version as VersionModels } from '@base-types/models';
import type { DeepPartialByKey } from '@base-types/types';

import type { Publishing } from './publishing';
import type { Settings } from './settings';
import { defaultSettings } from './settings';

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
