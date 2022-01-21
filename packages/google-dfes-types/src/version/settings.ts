import { Version } from '@voiceflow/google-types';

interface MessageDelay {
  durationMilliseconds: number;
}

export interface GoogleDFESVersionSettings extends Version.BaseGoogleVersionSettings {
  messageDelay?: MessageDelay;
}

const defaultMessageDelay = ({ durationMilliseconds = 1500 }: Partial<MessageDelay> = {}) => ({ durationMilliseconds });

export const defaultGoogleDFESVersionSettings = ({
  messageDelay,
  ...generalSettings
}: Partial<GoogleDFESVersionSettings> = {}): GoogleDFESVersionSettings => ({
  ...Version.defaultBaseGoogleVersionSettings(generalSettings),
  messageDelay: defaultMessageDelay(messageDelay),
});
