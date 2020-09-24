import { Locale } from '@/types';

export type GooglePublishing = {
  voice: string;
  locales: Locale[];
  displayName: string;
  developerName: string;
  pronunciation: string;
  developerEmail: string;
  invocationName: string;
  smallLogoImage: string;
  fullDescription: string;
  privacyPolicyUrl: string;
  shortDescription: string;
  largeBannerImage: string;
  termsOfServiceUrl: string;
  sampleInvocations: string[];
};

export const defaultGooglePublishing = ({
  voice = '',
  locales = [],
  displayName = '',
  developerName = '',
  pronunciation = '',
  smallLogoImage = '',
  developerEmail = '',
  invocationName = '',
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
  invocationName,
  smallLogoImage,
  developerEmail,
  fullDescription,
  largeBannerImage,
  privacyPolicyUrl,
  shortDescription,
  termsOfServiceUrl,
  sampleInvocations,
});
