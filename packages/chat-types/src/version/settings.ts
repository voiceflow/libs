import { BaseModels, BaseVersion } from '@voiceflow/base-types';

import { Prompt } from '@/models';
import { prompt } from '@/utils';

export interface Settings extends BaseVersion.Settings<Prompt> {
  session: BaseVersion.Session<Prompt>;
  messageDelay?: BaseModels.Version.PrototypeMessageDelay;
}

export const defaultMessageDelay = ({ durationMilliseconds = 1500 }: Partial<BaseModels.Version.PrototypeMessageDelay> = {}) => ({
  durationMilliseconds,
});

export const defaultSettings = ({ error, messageDelay, ...baseSettings }: Partial<Settings> = {}): Settings => ({
  ...BaseVersion.defaultSettings<Prompt>(baseSettings),
  error: prompt.defaultPrompt(error),
  messageDelay: defaultMessageDelay(messageDelay),
});
