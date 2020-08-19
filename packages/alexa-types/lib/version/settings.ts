import { Prompt, Voice } from '../types';

export enum RepeatType {
  OFF = 'OFF',
  DIALOG = 'DIALOG',
  ALL = 'ALL',
}

export type AccountLinking = {
  scopes: string[];
  domains: string[];
  clientId: string;
  clientSecret: string;
  accessTokenUrl: string;
  authorizationUrl: string;
  defaultTokenExpirationInSeconds: number;
  accessTokenScheme: string;
};

export enum SessionType {
  RESTART = 'restart',
  RESUME = 'resume',
}

export type RestartSession = {
  type: SessionType.RESTART;
};

export type ResumeSession = {
  type: SessionType.RESUME;
  resume: null | Prompt;
  follow: null | Prompt;
};

export type AlexaSettings = {
  events: null | string;
  accountLinking: null | AccountLinking;
  customInterface: boolean;
  session: RestartSession | ResumeSession;
  repeat: RepeatType;
  error: null | Prompt;
};

export const defaultAccountLinking = (accountLinking?: null | Partial<AccountLinking>): null | AccountLinking => {
  if (!accountLinking) return null;
  const {
    scopes = [],
    domains = [],
    clientId = '',
    clientSecret = '',
    accessTokenUrl = '',
    authorizationUrl = '',
    defaultTokenExpirationInSeconds = 3600,
    accessTokenScheme = 'HTTP_BASIC',
  } = accountLinking;
  return {
    scopes,
    domains,
    clientId,
    clientSecret,
    accessTokenUrl,
    authorizationUrl,
    defaultTokenExpirationInSeconds,
    accessTokenScheme,
  };
};

export const defaultPrompt = (prompt?: Prompt | null): null | Prompt => {
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
  accountLinking,
  error,
}: Partial<AlexaSettings> = {}): AlexaSettings => ({
  events,
  customInterface,
  session,
  repeat,
  accountLinking: defaultAccountLinking(accountLinking),
  error: defaultPrompt(error),
});
