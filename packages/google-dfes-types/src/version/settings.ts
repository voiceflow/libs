import { Version as ChatVersion } from '@voiceflow/chat-types';
import { Version } from '@voiceflow/google-types';

export interface GoogleDFESVersionSettings extends Version.BaseGoogleVersionSettings {
  messageDelay?: ChatVersion.MessageDelay;
}

// Message delay will get filtered out on the FE for DFVoice Projects
export const defaultGoogleDFESVersionSettings = ({
  messageDelay,
  ...generalSettings
}: Partial<GoogleDFESVersionSettings> = {}): GoogleDFESVersionSettings => ({
  ...Version.defaultBaseGoogleVersionSettings(generalSettings),
  messageDelay: ChatVersion.defaultMessageDelay(messageDelay),
});
