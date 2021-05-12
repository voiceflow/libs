import { Category, Locale } from '@/constants';

export type GoogleVersionPublishing = {
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
};

export const defaultGoogleVersionPublishing = ({
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
}: Partial<GoogleVersionPublishing> = {}): GoogleVersionPublishing => ({
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
