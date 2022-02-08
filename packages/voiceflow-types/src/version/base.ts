import { BaseModels } from '@voiceflow/base-types';
import { Locale } from '@voiceflow-types/constants';
import { AnyCommand } from '@voiceflow-types/node';

// shared only across voiceflow types
export interface BasePrototype extends BaseModels.Version.Prototype<AnyCommand, Locale> {}
export interface BaseSettings {
  locales: Locale[];
}

export const defaultBaseSettings = ({ locales = [Locale.EN_US] }: Partial<BaseSettings> = {}): BaseSettings => ({
  locales,
});
