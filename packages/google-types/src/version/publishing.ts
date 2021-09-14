import { Category, Locale } from '@/constants';

// base is used in google-dfes types

export interface BaseGoogleVersionPublishing {
  // localized settings
  voice: string;
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
  enabledRegions?: string[];
  disabledRegions?: string[];
  category?: Category;
  usesTransactionsApi?: boolean;
  usesDigitalPurchaseApi?: boolean;
  usesInteractiveCanvas?: boolean;
  usesHomeStorage?: boolean;
  designedForFamily?: boolean;
  containsAlcoholOrTobaccoContent?: boolean;
  keepsMicOpen?: boolean;
  surfaceRequirements?: any;
  testingInstructions?: string;
  accountLinking?: any;
}

export const defaultBaseGoogleVersionPublishing = ({
  voice = '',
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
}: Partial<BaseGoogleVersionPublishing> = {}): BaseGoogleVersionPublishing => ({
  voice,
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

export interface GoogleVersionPublishing extends BaseGoogleVersionPublishing {
  locales: Locale[];
}

export const defaultGoogleVersionPublishing = ({
  locales = [],
  ...baseGoogleVersionSettings
}: Partial<GoogleVersionPublishing> = {}): GoogleVersionPublishing => ({
  ...defaultBaseGoogleVersionPublishing(baseGoogleVersionSettings),
  locales,
});
