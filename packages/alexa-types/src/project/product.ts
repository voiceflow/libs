import { Locale, ProductType } from '@/constants';

export enum MarketPlace {
  DE = 'amazon.de',
  ES = 'amazon.es',
  FR = 'amazon.fr',
  IT = 'amazon.it',
  COM = 'amazon.com',
  CO_JP = 'amazon.co.jp',
  CO_UK = 'amazon.co.uk',
}

export const encodeMarketPlaceKey = (key: MarketPlace) => key.replace(/\./g, '%2E');
export const decodeMarketPlaceKey = (key: string) => key.replace(/%2E/g, '.') as MarketPlace;

export enum SubscriptionPaymentFrequency {
  YEARLY = 'YEARLY',
  MONTHLY = 'MONTHLY',
}

export interface PublishingPrice {
  releaseDate: string; // e.g. 2020-06-15
  defaultPriceListing: {
    price: number;
    currency: string;
  };
}

export interface PublishingLocale {
  name: string;
  summary: string;
  keywords: string[];
  description: string;
  smallIconUri: string; // url
  largeIconUri: string; // url
  examplePhrases: string[];
  customProductPrompts: {
    boughtCardDescription: string;
    purchasePromptDescription: string;
  };
}

// products in sql
export interface AlexaProduct {
  name: string;
  type: ProductType;
  version: '1.0';
  productID: string;
  referenceName: string;
  purchasableState: 'PURCHASABLE';
  testingInstructions: string;
  privacyAndCompliance: {
    locales: Partial<Record<Locale, { privacyPolicyUrl: string }>>;
  };
  publishingInformation: {
    pricing: Partial<Record<MarketPlace, PublishingPrice>>;
    locales: Partial<Record<Locale, PublishingLocale>>;
    taxInformation: { category: string };
    distributionCountries: string[]; // eg ["US", "DE", ...]
  };
  subscriptionInformation?: {
    subscriptionTrialPeriodDays: number;
    subscriptionPaymentFrequency: SubscriptionPaymentFrequency;
  };
}
