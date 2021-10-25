import { Version } from '@voiceflow/google-types';

import { Locale } from '@/constants';

export interface GoogleDFESVersionPublishing extends Version.BaseGoogleVersionPublishing {
  locales: Locale[];
  triggerPhrase?: string[];
}

export const defaultGoogleDFESVersionPublishing = ({
  locales = [],
  triggerPhrase = [],
  ...baseGoogleVersionPublising
}: Partial<GoogleDFESVersionPublishing> = {}): GoogleDFESVersionPublishing => ({
  ...Version.defaultBaseGoogleVersionPublishing(baseGoogleVersionPublising),
  locales,
  triggerPhrase,
});
