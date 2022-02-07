import { Nullable } from '@voiceflow/base-types';
import { VoiceVersion } from '@voiceflow/voice-types';
import { v1 } from 'ask-smapi-model';

import { Voice } from '@/constants';

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

export interface AccountLinking {
  type: v1.skill.accountLinking.AccountLinkingType;
  scopes: string[];
  domains: string[];
  clientId: string;
  clientSecret: string;
  accessTokenUrl: string;
  authorizationUrl: string;
  accessTokenScheme: v1.skill.accountLinking.AccessTokenSchemeType;
  defaultTokenExpirationInSeconds: number;
}

export interface Settings extends VoiceVersion.Settings<Voice> {
  events: Nullable<string>;
  permissions: string[];
  accountLinking: Nullable<AccountLinking>;
  customInterface: boolean;
  modelSensitivity: Nullable<ModelSensitivity>;
}

export const defaultAccountLinking = (accountLinking?: Nullable<Partial<AccountLinking>>): Nullable<AccountLinking> => {
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

export const defaultSettings = ({
  events = null,
  permissions = [],
  accountLinking,
  customInterface = false,
  modelSensitivity = null,
  ...voiceSettings
}: Partial<Settings> = {}): Settings => ({
  ...VoiceVersion.defaultSettings<Voice>(voiceSettings, { defaultPromptVoice: Voice.ALEXA }),
  events,
  permissions,
  accountLinking: defaultAccountLinking(accountLinking),
  customInterface,
  modelSensitivity,
});
