import { AnyRecord, Nullable } from '@/utils';

import { BaseCommand, PrototypeModel } from '../base';

export interface PrototypeStackFrame<Command extends BaseCommand = BaseCommand> {
  nodeID?: Nullable<string>;
  programID: string;

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
}

export interface Prototype<Command extends BaseCommand = BaseCommand, Locale extends string = string> {
  data: PrototypeData<Locale>;
  model: PrototypeModel;
  context: PrototypeContext<Command>;
  platform: string;
  settings: PrototypeSettings;
}
