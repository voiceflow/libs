import { GoogleVersion } from '@voiceflow/google-types';

import type { BasePublishing } from '../base';
import { defaultBasePublishing } from '../base';

export interface SharedVoicePublishing extends GoogleVersion.SharedVoicePublishing {}

export interface VoicePublishing extends SharedVoicePublishing, BasePublishing {}

export const defaultSharedVoicePublishing = (
  publishing: Partial<SharedVoicePublishing> = {}
): SharedVoicePublishing => ({
  ...GoogleVersion.defaultSharedVoicePublishing(publishing),
});

export const defaultVoicePublishing = (publishing: Partial<VoicePublishing> = {}): VoicePublishing => ({
  ...defaultSharedVoicePublishing(publishing),
  ...defaultBasePublishing(publishing),
});
