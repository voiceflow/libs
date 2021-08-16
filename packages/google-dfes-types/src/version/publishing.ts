import { Version } from '@voiceflow/google-types';

import { Locale } from '@/constants';

export interface GoogleDFESVersionPublishing extends Version.BaseGoogleVersionPublishing {
  locales: Locale[];
}

export const defaultGoogleDFESVersionPublishing = ({
  locales = [],
  ...baseGoogleVersionPublising
}: Partial<GoogleDFESVersionPublishing> = {}): GoogleDFESVersionPublishing => ({
  ...Version.defaultBaseGoogleVersionPublishing(baseGoogleVersionPublising),
  locales,
});
