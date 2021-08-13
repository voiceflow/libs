import { VersionPrototype } from '@voiceflow/api-sdk';
import { Node, Version } from '@voiceflow/base-types';

import { Locale, Voice } from '@/constants';

import { BaseVersionSettings, defaultBaseVersionSettings, defaultGeneralVersionSettings, GeneralVersionSettings } from './settings';

export * from './settings';

export interface BaseVersionData<V> extends Version.VersionData {
  settings: BaseVersionSettings<V>;
}

export const defaultBaseVersionData = <V>(
  { settings, ...data }: Partial<BaseVersionData<V>>,
  options: { defaultPromptVoice: V }
): BaseVersionData<V> => ({
  ...Version.defaultVersionData(data),
  settings: defaultBaseVersionSettings<V>(settings, options),
});

export interface BaseVersion<V> extends Version.Version {
  platformData: BaseVersionData<V>;
}

export interface GeneralVersionData extends BaseVersionData<Voice> {
  settings: GeneralVersionSettings;
}

export interface GeneralVersion extends BaseVersion<Voice> {
  prototype: VersionPrototype<Node.Utils.AnyCommand, Locale>;
  platformData: GeneralVersionData;
}

export const defaultGeneralVersionData = ({ settings, ...data }: Partial<GeneralVersionData>): GeneralVersionData => ({
  ...defaultBaseVersionData(data, { defaultPromptVoice: Voice.DEFAULT }),
  settings: defaultGeneralVersionSettings(settings),
});
