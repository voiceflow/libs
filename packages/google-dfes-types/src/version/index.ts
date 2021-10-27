import { Models } from '@voiceflow/base-types';
import { Version } from '@voiceflow/google-types';

import { Locale } from '@/constants';
import { AnyGoogleDFESCommand } from '@/node';

import { defaultGoogleDFESVersionPublishing, GoogleDFESVersionPublishing } from './publishing';
import { defaultGoogleDFESVersionSettings, GoogleDFESVersionSettings } from './settings';

export * from './publishing';
export * from './settings';

export interface GoogleDFESVersionData extends Version.BaseGoogleVersionData {
  settings: GoogleDFESVersionSettings;
  publishing: GoogleDFESVersionPublishing;
}

export interface GoogleDFESVersion extends Version.BaseGoogleVersion {
  prototype?: Models.VersionPrototype<AnyGoogleDFESCommand, Locale>;
  platformData: GoogleDFESVersionData;
}

export const defaultGoogleDFESVersionVersionData = ({
  settings,
  publishing,
  ...baseGoogleVersionData
}: Partial<GoogleDFESVersionData>): GoogleDFESVersionData => ({
  ...Version.defaultBaseGoogleVersionData(baseGoogleVersionData),
  settings: defaultGoogleDFESVersionSettings(settings),
  publishing: defaultGoogleDFESVersionPublishing(publishing),
});
