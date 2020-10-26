import { Intent } from './intent';
import { defaultGeneralSettings, GeneralSettings } from './settings';
import { Slot } from './slot';

export * from './slot';
export * from './intent';
export * from './settings';

export type GeneralVersionData<V> = {
  slots: Slot[];
  intents: Intent[];
  settings: GeneralSettings<V>;
  publishing: {};
};

export const defaultGeneralVersionData = <V>(
  { slots = [], intents = [], settings, publishing = {} }: Partial<GeneralVersionData<V>>,
  options: { defaultVoice: V }
): GeneralVersionData<V> => ({
  slots,
  intents,
  settings: defaultGeneralSettings<V>(settings, options),
  publishing,
});
