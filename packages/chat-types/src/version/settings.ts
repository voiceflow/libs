import { Version } from '@voiceflow/base-types';

import { Prompt } from '@/types';
import { defaultPrompt } from '@/utils';

interface MessageDelay {
  durationMilliseconds: number;
}

export interface ChatVersionSettings extends Version.BaseVersionSettings<Prompt> {
  session: Version.RestartSession | Version.ResumeSession<Prompt>;
  messageDelay?: MessageDelay;
}

const defaultMessageDelay = ({ durationMilliseconds = 1000 }: Partial<MessageDelay> = {}) => ({ durationMilliseconds });

export const defaultChatVersionSettings = ({ error, messageDelay, ...baseSettings }: Partial<ChatVersionSettings> = {}): ChatVersionSettings => ({
  ...Version.defaultBaseVersionSettings<Prompt>(baseSettings),
  error: defaultPrompt(error),
  messageDelay: defaultMessageDelay(messageDelay),
});
