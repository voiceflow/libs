import { Category, Locale } from '@google-types/constants';
import { BaseVersion } from '@voiceflow/base-types';

// shared across google and dfes types
export interface SharedBasePublishing extends BaseVersion.Publishing {
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
  category?: Category;
  keepsMicOpen?: boolean;
  accountLinking?: any; // TODO: add type or replace with unknown
  enabledRegions?: string[];
  disabledRegions?: string[];
  usesHomeStorage?: boolean;
  designedForFamily?: boolean;
  usesTransactionsApi?: boolean;
  surfaceRequirements?: any; // TODO: add type or replace with unknown
  testingInstructions?: string;
  usesInteractiveCanvas?: boolean;
  usesDigitalPurchaseApi?: boolean;
  containsAlcoholOrTobaccoContent?: boolean;
}

export const defaultSharedBasePublishing = ({
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
}: Partial<SharedBasePublishing> = {}): SharedBasePublishing => ({
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

// shared only across google types
export interface BasePublishing extends BaseVersion.Publishing {
  locales: Locale[];
}

export const defaultBasePublishing = ({ locales = [] }: Partial<BasePublishing> = {}): BasePublishing => ({
  locales,
});
