import type { CompiledCMSVariable } from '@base-types/cms/variables';
import type { AnyRecord, Nullable } from '@voiceflow/common';

import type { BaseCommand, Intent, PrototypeModel, Slot } from '../base';
import type { FunctionCompiledDefinition } from '../functionDefinition';

export interface PrototypeStackFrame<Command extends BaseCommand = BaseCommand> {
  nodeID?: Nullable<string>;
  diagramID: string;

  storage?: AnyRecord;
  commands?: Command[];
  variables?: AnyRecord;
}

export interface PrototypeContext<Command extends BaseCommand = BaseCommand> {
  turn?: AnyRecord;
  stack?: PrototypeStackFrame<Command>[];
  storage?: AnyRecord;
  variables?: AnyRecord;
}

export interface PrototypeMessageDelay {
  durationMilliseconds: number;
}

export interface PrototypeData<Locale extends string> {
  name: string;
  locales: Locale[];
  messageDelay?: PrototypeMessageDelay;
}

export interface PrototypeSettings {
  avatar?: string;
  layout?: string;
  buttons?: string;
  password?: string;
  brandColor?: string;
  brandImage?: string;
  hasPassword?: boolean;
  buttonsOnly?: boolean;
  variableStateID?: string;
}

export type SurveyContext<
  SurveyContextExtension extends AnyRecord = AnyRecord,
  PlatformType extends string = string,
> = {
  slotsMap: Record<string, Slot>;
  extraSlots: Slot[];
  extraIntents: Intent[];
  usedIntentsSet: string[];
  cmsVariables?: Record<string, CompiledCMSVariable>;
  functionDefinitions?: Record<string, FunctionCompiledDefinition>;
  platform: PlatformType;

  /**
   * @deprecated
   */
  usedFunctionsMap?: Record<string, string>;
} & SurveyContextExtension;

export interface Prototype<
  Command extends BaseCommand = BaseCommand,
  Locale extends string = string,
  SurveyContextExtension extends AnyRecord = AnyRecord,
> {
  type: string;
  data: PrototypeData<Locale>;
  model: PrototypeModel;
  context: PrototypeContext<Command>;
  platform: string;
  settings: PrototypeSettings;
  surveyorContext: SurveyContext<SurveyContextExtension>;
}
