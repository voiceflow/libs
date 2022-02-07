import { BaseModels } from '@voiceflow/base-types';

import { Locale } from '@/constants';
import { AnyCommand } from '@/node';

export interface BasePrototype extends BaseModels.Version.Prototype<AnyCommand, Locale> {}

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
