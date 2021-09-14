import { Version } from '@voiceflow/base-types';

import { Intent, Prompt } from '@/types';

import { ChatVersionSettings, defaultChatVersionSettings } from './settings';

export * from './settings';

export interface ChatVersionData extends Version.BaseVersionData<Prompt> {
  intents: Intent[];
  settings: ChatVersionSettings;
}

export const defaultChatVersionData = ({ intents = [], settings, ...data }: Partial<ChatVersionData>): ChatVersionData => ({
  ...Version.defaultBaseVersionData<Prompt>(data),
  intents,
  settings: defaultChatVersionSettings(settings),
});

export interface ChatVersion extends Version.BaseVersion<Prompt> {
  platformData: ChatVersionData;
}
