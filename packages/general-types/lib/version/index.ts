import { StrictVersionPlatformData } from '@voiceflow/api-sdk';

import { defaultGeneralSettings, GeneralSettings } from './settings';

export * from './settings';

export type GeneralVersionData<V> = StrictVersionPlatformData<GeneralSettings<V>>;

export const defaultGeneralVersionData = <V>(
  { slots = [], intents = [], settings, publishing = {} }: Partial<GeneralVersionData<V>>,
  options: { defaultPromptVoice: V }
): GeneralVersionData<V> => ({
  slots,
  intents,
  settings: defaultGeneralSettings<V>(settings, options),
  publishing,
});
