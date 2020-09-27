export enum Category {
  CATEGORY_UNSPECIFIED = 'CATEGORY_UNSPECIFIED',
  BUSINESS_AND_FINANCE = 'BUSINESS_AND_FINANCE',
  EDUCATION_AND_REFERENCE = 'EDUCATION_AND_REFERENCE',
  FOOD_AND_DRINK = 'FOOD_AND_DRINK',
  GAMES_AND_TRIVIA = 'GAMES_AND_TRIVIA',
  HEALTH_AND_FITNESS = 'HEALTH_AND_FITNESS',
  KIDS_AND_FAMILY = 'KIDS_AND_FAMILY',
  LIFESTYLE = 'LIFESTYLE',
  LOCAL = 'LOCAL',
  MOVIES_AND_TV = 'MOVIES_AND_TV',
  MUSIC_AND_AUDIO = 'MUSIC_AND_AUDIO',
  NEWS = 'NEWS',
  NOVELTY_AND_HUMOR = 'NOVELTY_AND_HUMOR',
  PRODUCTIVITY = 'PRODUCTIVITY',
  SHOPPING = 'SHOPPING',
  SOCIAL = 'SOCIAL',
  SPORTS = 'SPORTS',
  TRAVEL_AND_TRANSPORTATION = 'TRAVEL_AND_TRANSPORTATION',
  UTILITIES = 'UTILITIES',
  WEATHER = 'WEATHER',
  HOME_CONTROL = 'HOME_CONTROL'
}

export type LocalizedSettings = {
  displayName: string,
  pronunciation: string,
  shortDescription: string,
  fullDescription: string,
  smallLogoImage: string,
  largeBannerImage: string,
  developerName: string,
  developerEmail: string,
  termsOfServiceUrl: string,
  voice: string,
  voiceLocale: string,
  privacyPolicyUrl: string,
  sampleInvocations: string[],
  themeCustomization?: any,
}

export type Settings = {
  projectId: string,
  defaultLocale: string,
  localizedSettings: LocalizedSettings,
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
}

export type SettingsConfigFile = {
  filePath: 'settings/settings.yaml',
  settings: Settings
}