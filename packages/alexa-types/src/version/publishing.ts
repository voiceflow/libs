import { Locale } from '@/types';

export type AlexaVersionPublishing = {
  forExport: boolean;
  hasAds: boolean;
  summary: string;
  invocationName: string;
  locales: [Locale, ...Locale[]]; // always at least one locale
  category: string;
  personal: boolean;
  keywords: string;
  smallIcon: string;
  largeIcon: string;
  description: string;
  invocations: string[];
  hasPurchase: boolean;
  forChildren: boolean;
  instructions: string;
  privacyPolicy: string;
  termsAndConditions: string;
  updatesDescription?: string;
};

export const defaultAlexaVersionPublishing = ({
  invocationName = '',
  hasPurchase = false,
  forExport = true,
  hasAds = false,
  forChildren = false,
  personal = false,
  smallIcon = '',
  largeIcon = '',
  invocations = [],
  summary = '',
  description = '',
  instructions = '',
  privacyPolicy = '',
  termsAndConditions = '',
  keywords = '',
  category = '',
  locales = [Locale.EN_US],
  updatesDescription,
}: Partial<AlexaVersionPublishing> = {}): AlexaVersionPublishing => ({
  summary,
  invocations,
  smallIcon,
  largeIcon,
  hasAds,
  personal,
  forExport,
  invocationName,
  hasPurchase,
  forChildren,
  description,
  instructions,
  privacyPolicy,
  termsAndConditions,
  keywords,
  category,
  locales,
  updatesDescription,
});
