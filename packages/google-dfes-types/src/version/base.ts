import type { Locale } from '@google-dfes-types/constants';
import type { AnyCommand } from '@google-dfes-types/node';
import type { BaseModels, BaseVersion } from '@voiceflow/base-types';
import type { GoogleVersion } from '@voiceflow/google-types';

export interface BasePrototype
  extends BaseModels.Version.Prototype<AnyCommand, Locale, GoogleVersion.GaDfesSurveyContextExtension> {}

export interface BasePublishing extends BaseVersion.Publishing {
  locales: Locale[];
  agentName?: string;
  triggerPhrase?: string[];
}

export const defaultBasePublishing = ({
  locales = [],
  agentName,
  triggerPhrase = [],
}: Partial<BasePublishing> = {}): BasePublishing => ({
  locales,
  agentName,
  triggerPhrase,
});
