import { Locale } from '../types';

export type MarketPlace = 'amazon.com' | 'amazon.co.uk' | 'amazon.de' | 'amazon.es' | 'amazon.fr' | 'amazon.it' | 'amazon.co.jp';

// products in sql
export type AlexaProduct = {
  productID: string; // id
  name: string; // name
  // rest is data field
  type: 'SUBSCRIPTION' | 'CONSUMABLE' | 'ENTITLEMENT';
  version: '1.0';
  referenceName: string;
  subscriptionInformation?: {
    subscriptionPaymentFrequency: 'MONTHLY' | 'YEARLY';
    subscriptionTrialPeriodDays: string;
  };
  publishingInformation: {
    distributionCountries: string[]; // eg ["US", "DE", ...]
    pricing: {
      [key in MarketPlace]?: {
        releaseDate: string; // e.g. 2020-06-15
        defaultPriceListing: {
          price: number;
          currency: string;
        };
      };
    };
    taxInformation: {
      category: string;
    };
    locales: Record<
      Locale,
      {
        name: string;
        smallIconUri: string; // url
        largeIconUri: string; // url
        summary: string;
        description: string;
        keywords: string[];
        examplePhrases: string[];
        customProductPrompts: {
          boughtCardDescription: string;
          purchasePromptDescription: string;
        };
      }
    >;
  };
  privacyAndCompliance: {
    locales: Record<Locale, { privacyPolicyUrl: string }>;
  };
  testingInstructions: string;
  purchasableState: 'PURCHASABLE';
};
