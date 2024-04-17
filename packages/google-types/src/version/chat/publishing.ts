import type { BasePublishing, SharedBasePublishing } from '../base';
import { defaultBasePublishing, defaultSharedBasePublishing } from '../base';

export interface SharedChatPublishing extends SharedBasePublishing {}

export interface ChatPublishing extends SharedChatPublishing, BasePublishing {}

export const defaultSharedChatPublishing = (publishing: Partial<SharedChatPublishing> = {}): SharedChatPublishing => ({
  ...defaultSharedBasePublishing(publishing),
});

export const defaultChatPublishing = (publishing: Partial<ChatPublishing> = {}): ChatPublishing => ({
  ...defaultSharedChatPublishing(publishing),
  ...defaultBasePublishing(publishing),
});
