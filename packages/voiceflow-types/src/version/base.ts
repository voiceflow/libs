import { BaseModels } from '@voiceflow/base-types';

import { Locale } from '@/constants';
import { AnyCommand } from '@/node';

// shared only across voiceflow types
export interface BasePrototype extends BaseModels.Version.Prototype<AnyCommand, Locale> {}
export interface BaseSettings {
  locales: Locale[];
}

export const defaultBaseSettings = ({ locales = [Locale.EN_US] }: Partial<BaseSettings> = {}): BaseSettings => ({
  locales,
});
