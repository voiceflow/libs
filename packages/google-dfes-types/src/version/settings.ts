import { Version as ChatVersion } from '@voiceflow/chat-types';
import { Version } from '@voiceflow/google-types';

export interface GoogleDFESVersionSettings extends Version.BaseGoogleVersionSettings {
  messageDelay?: BaseVersion.MessageDelay;
}

export const defaultGoogleDFESVersionSettings = ({
  messageDelay,
  ...generalSettings
}: Partial<GoogleDFESVersionSettings> = {}): GoogleDFESVersionSettings => ({
  ...Version.defaultBaseGoogleVersionSettings(generalSettings),
  messageDelay: ChatVersion.defaultMessageDelay(messageDelay),
});
