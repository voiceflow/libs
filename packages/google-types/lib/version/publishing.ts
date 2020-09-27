import { Category } from '@/constants';
import { Locale } from '@/types';

export type GooglePublishing = {
  // localized settings
  voice: string;
  locales: Locale[];
  displayName: string;
  developerName: string;
  pronunciation: string;
  developerEmail: string;
  smallLogoImage: string;
  fullDescription: string;
  privacyPolicyUrl: string;
  shortDescription: string;
  largeBannerImage: string;
  termsOfServiceUrl: string;
  sampleInvocations: string[];

  // general settings
  enabledRegions?: string[],
  disabledRegions?: string[],
  category?: Category,
  usesTransactionsApi?: boolean,
  usesDigitalPurchaseApi?: boolean,
  usesInteractiveCanvas?: boolean,
  usesHomeStorage?: boolean,
  designedForFamily?: boolean,
  containsAlcoholOrTobaccoContent?: boolean,
  keepsMicOpen?: boolean,
  surfaceRequirements?: any,
  testingInstructions?: string,
  accountLinking?: any,
};

export const defaultGooglePublishing = ({
  voice = '',
  locales = [],
  displayName = '',
  developerName = '',
  pronunciation = '',
  smallLogoImage = '',
  developerEmail = '',
  fullDescription = '',
  largeBannerImage = '',
  privacyPolicyUrl = '',
  shortDescription = '',
  termsOfServiceUrl = '',
  sampleInvocations = [],
}: Partial<GooglePublishing> = {}): GooglePublishing => ({
  voice,
  locales,
  displayName,
  developerName,
  pronunciation,
  smallLogoImage,
  developerEmail,
  fullDescription,
  largeBannerImage,
  privacyPolicyUrl,
  shortDescription,
  termsOfServiceUrl,
  sampleInvocations,
});
