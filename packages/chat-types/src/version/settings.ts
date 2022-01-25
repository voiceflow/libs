import { Version } from '@voiceflow/base-types';

import { Prompt } from '@/types';
import { defaultPrompt } from '@/utils';

export interface ChatVersionSettings extends Version.BaseVersionSettings<Prompt> {
  session: Version.RestartSession | Version.ResumeSession<Prompt>;
  messageDelay?: Version.MessageDelay;
}

export const defaultChatVersionSettings = ({ error, messageDelay, ...baseSettings }: Partial<ChatVersionSettings> = {}): ChatVersionSettings => ({
  ...Version.defaultBaseVersionSettings<Prompt>(baseSettings),
  error: defaultPrompt(error),
  messageDelay: Version.defaultMessageDelay(messageDelay),
});
