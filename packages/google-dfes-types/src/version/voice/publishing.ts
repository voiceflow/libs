import { GoogleVersion } from '@voiceflow/google-types';

import { BasePublishing, defaultBasePublishing } from '../base';

export interface SharedVoicePublishing extends GoogleVersion.SharedVoicePublishing {}

export interface VoicePublishing extends SharedVoicePublishing, BasePublishing {}

export const defaultSharedVoicePublishing = (publishing: Partial<SharedVoicePublishing> = {}): SharedVoicePublishing => ({
  ...GoogleVersion.defaultSharedVoicePublishing(publishing),
});

export const defaultVoicePublishing = (publishing: Partial<VoicePublishing> = {}): VoicePublishing => ({
  ...defaultSharedVoicePublishing(publishing),
  ...defaultBasePublishing(publishing),
});
