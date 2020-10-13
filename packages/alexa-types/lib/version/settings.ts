import { Prompt } from '@voiceflow/general-types';
import { v1 } from 'ask-smapi-model';

import { Voice } from '../types';

export enum RepeatType {
  OFF = 'OFF',
  ALL = 'ALL',
  DIALOG = 'DIALOG',
}

export enum AccountLinkingType {
  IMPLICIT = 'IMPLICIT',
  AUTH_CODE = 'AUTH_CODE',
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

export enum SessionType {
  RESUME = 'resume',
  RESTART = 'restart',
}

export type RestartSession = {
  type: SessionType.RESTART;
};

export type ResumeSession = {
  type: SessionType.RESUME;
  resume: null | Prompt<Voice>;
  follow: null | Prompt<Voice>;
};

export type AlexaSettings = {
  error: null | Prompt<Voice>;
  repeat: RepeatType;
  events: null | string;
  session: RestartSession | ResumeSession;
  permissions: string[];
  accountLinking: null | AccountLinking;
  customInterface: boolean;
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

export const defaultPrompt = (prompt?: Prompt<Voice> | null): null | Prompt<Voice> => {
  if (!prompt || !prompt.content) return null;
  return {
    content: prompt.content,
    voice: prompt.voice || Voice.ALEXA,
  };
};

export const defaultAlexaSettings = ({
  events = null,
  customInterface = false,
  session = { type: SessionType.RESTART },
  repeat = RepeatType.ALL,
  permissions = [],
  accountLinking,
  error,
}: Partial<AlexaSettings> = {}): AlexaSettings => ({
  events,
  customInterface,
  session,
  repeat,
  permissions,
  accountLinking: defaultAccountLinking(accountLinking),
  error: defaultPrompt(error),
});
