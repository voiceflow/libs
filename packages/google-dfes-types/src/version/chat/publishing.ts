import { GoogleVersion } from '@voiceflow/google-types';

import { BasePublishing, defaultBasePublishing } from '../base';

export interface SharedChatPublishing extends GoogleVersion.SharedChatPublishing {}

export interface ChatPublishing extends SharedChatPublishing, BasePublishing {}

export const defaultSharedChatPublishing = (publishing: Partial<SharedChatPublishing> = {}): SharedChatPublishing => ({
  ...GoogleVersion.defaultSharedChatPublishing(publishing),
});

export const defaultChatPublishing = (publishing: Partial<ChatPublishing> = {}): ChatPublishing => ({
  ...defaultSharedChatPublishing(publishing),
  ...defaultBasePublishing(publishing),
});
