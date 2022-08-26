import { Locale } from '@google-dfes-types/constants';
import { AnyCommand } from '@google-dfes-types/node';
import { BaseModels } from '@voiceflow/base-types';
import { GoogleVersion } from '@voiceflow/google-types';

export interface BasePrototype extends BaseModels.Version.Prototype<AnyCommand, Locale, GoogleVersion.GaDfesSurveyContextExtension> {}

export interface BasePublishing {
  locales: Locale[];
  agentName?: string;
  triggerPhrase?: string[];
}

export const defaultBasePublishing = ({ locales = [], agentName, triggerPhrase = [] }: Partial<BasePublishing> = {}): BasePublishing => ({
  locales,
  agentName,
  triggerPhrase,
});
