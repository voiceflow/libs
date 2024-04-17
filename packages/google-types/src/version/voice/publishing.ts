import type { BasePublishing, SharedBasePublishing } from '../base';
import { defaultBasePublishing, defaultSharedBasePublishing } from '../base';

export interface SharedVoicePublishing extends SharedBasePublishing {}

export interface VoicePublishing extends SharedVoicePublishing, BasePublishing {}

export const defaultSharedVoicePublishing = (
  publishing: Partial<SharedVoicePublishing> = {}
): SharedVoicePublishing => ({
  ...defaultSharedBasePublishing(publishing),
});

export const defaultVoicePublishing = (publishing: Partial<VoicePublishing> = {}): VoicePublishing => ({
  ...defaultSharedVoicePublishing(publishing),
  ...defaultBasePublishing(publishing),
});
