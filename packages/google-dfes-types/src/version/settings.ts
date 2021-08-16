/* eslint-disable @typescript-eslint/no-empty-interface */

import { Version } from '@voiceflow/google-types';

export interface GoogleDFESVersionSettings extends Version.BaseGoogleVersionSettings {}

export const defaultGoogleDFESVersionSettings = ({ ...generalSettings }: Partial<GoogleDFESVersionSettings> = {}): GoogleDFESVersionSettings => ({
  ...Version.defaultBaseGoogleVersionSettings(generalSettings),
});
