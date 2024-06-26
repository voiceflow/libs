import type { Prompt } from '@chat-types/models';
import { prompt } from '@chat-types/utils';
import type { BaseModels } from '@voiceflow/base-types';
import { BaseVersion } from '@voiceflow/base-types';

export interface Settings extends BaseVersion.Settings<Prompt> {
  session: BaseVersion.Session<Prompt>;
  messageDelay?: BaseModels.Version.PrototypeMessageDelay;
}

export const defaultMessageDelay = ({
  durationMilliseconds = 1000,
}: Partial<BaseModels.Version.PrototypeMessageDelay> = {}) => ({
  durationMilliseconds,
});

export const defaultSettings = ({ error, messageDelay, ...baseSettings }: Partial<Settings> = {}): Settings => ({
  ...BaseVersion.defaultSettings<Prompt>(baseSettings),
  error: prompt.defaultPrompt(error),
  messageDelay: defaultMessageDelay(messageDelay),
});
