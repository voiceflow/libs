import { Version } from '@voiceflow/base-types';

import { Prompt } from '@/types';

import { ChatVersionSettings, defaultChatVersionSettings } from './settings';

export * from './settings';

export interface ChatVersionData extends Version.BaseVersionData<Prompt> {
  settings: ChatVersionSettings;
}

export const defaultChatVersionData = ({ settings, ...data }: Partial<ChatVersionData>): ChatVersionData => ({
  ...Version.defaultBaseVersionData<Prompt>(data),
  settings: defaultChatVersionSettings(settings),
});

export interface ChatVersion extends Version.BaseVersion<Prompt> {
  platformData: ChatVersionData;
}
