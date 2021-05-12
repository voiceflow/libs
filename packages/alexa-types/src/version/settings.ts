import { BaseResumeSession, BaseVersionSettings, defaultBaseVersionSettings } from '@voiceflow/general-types';
import { v1 } from 'ask-smapi-model';

import { Voice } from '@/types';

export type ResumeSession = BaseResumeSession<Voice>;

export enum AccountLinkingType {
  IMPLICIT = 'IMPLICIT',
  AUTH_CODE = 'AUTH_CODE',
}

export enum ModelSensitivity {
  LOW = 'LOW',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
}

export enum AccountLinkingAccessTokenScheme {
  HTTP_BASIC = 'HTTP_BASIC',
  REQUEST_BODY_CREDENTIALS = 'REQUEST_BODY_CREDENTIALS',
}

export type AccountLinking = {
  type: v1.skill.accountLinking.AccountLinkingType;
  scopes: string[];
  domains: string[];
  clientId: string;
  clientSecret: string;
  accessTokenUrl: string;
  authorizationUrl: string;
  accessTokenScheme: v1.skill.accountLinking.AccessTokenSchemeType;
  defaultTokenExpirationInSeconds: number;
};

export type AlexaVersionSettings = BaseVersionSettings<Voice> & {
  events: null | string;
  permissions: string[];
  accountLinking: null | AccountLinking;
  customInterface: boolean;
  modelSensitivity: null | ModelSensitivity;
};

export const defaultAccountLinking = (accountLinking?: null | Partial<AccountLinking>): null | AccountLinking => {
  if (!accountLinking) {
    return null;
  }

  const {
    type = AccountLinkingType.AUTH_CODE,
    scopes = [],
    domains = [],
    clientId = '',
    clientSecret = '',
    accessTokenUrl = '',
    authorizationUrl = '',
    accessTokenScheme = AccountLinkingAccessTokenScheme.HTTP_BASIC,
    defaultTokenExpirationInSeconds = 3600,
  } = accountLinking;

  return {
    type,
    scopes,
    domains,
    clientId,
    clientSecret,
    accessTokenUrl,
    authorizationUrl,
    accessTokenScheme,
    defaultTokenExpirationInSeconds,
  };
};

export const defaultAlexaVersionSettings = ({
  events = null,
  permissions = [],
  accountLinking,
  customInterface = false,
  modelSensitivity = null,
  ...generalSettings
}: Partial<AlexaVersionSettings> = {}): AlexaVersionSettings => ({
  ...defaultBaseVersionSettings<Voice>(generalSettings, { defaultPromptVoice: Voice.ALEXA }),
  events,
  permissions,
  accountLinking: defaultAccountLinking(accountLinking),
  customInterface,
  modelSensitivity,
});
