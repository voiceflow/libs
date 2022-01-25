import { defaultMessageDelay, MessageDelay } from '@voiceflow/base-types';
import { Version } from '@voiceflow/google-types';

export interface GoogleDFESVersionSettings extends Version.BaseGoogleVersionSettings {
  messageDelay?: MessageDelay;
}

export const defaultGoogleDFESVersionSettings = ({
  messageDelay,
  ...generalSettings
}: Partial<GoogleDFESVersionSettings> = {}): GoogleDFESVersionSettings => ({
  ...Version.defaultBaseGoogleVersionSettings(generalSettings),
  messageDelay: defaultMessageDelay(messageDelay),
});
