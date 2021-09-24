/* eslint-disable @typescript-eslint/no-empty-interface */

import * as s from 'superstruct';

import { AnyRecord } from '@/types';
import { dynamicObject } from '@/utils';

import {
  BaseCommand,
  SCommand,
  SCreatorID,
  SDiagramID,
  SIntent,
  SName,
  SPlatform,
  SProjectID,
  SPrototypeModel,
  SSlot,
  SVariable,
  SVersionID,
} from './shared';

export const SVersionPlatformDataSettings = s.object();

export const SVersionPlatformDataPublishing = s.object();

// TODO: do not forget to add new field to the StrictVersionPlatformData union.
export const SVersionPlatformData = dynamicObject({
  slots: s.array(SSlot),
  intents: s.array(SIntent),
  settings: SVersionPlatformDataSettings,
  publishing: SVersionPlatformDataPublishing,
});

export interface StrictVersionPlatformData<S extends AnyRecord = AnyRecord, P extends AnyRecord = AnyRecord>
  extends Pick<s.StructType<typeof SVersionPlatformData>, 'slots' | 'intents'> {
  settings: S;
  publishing: P;
}

export interface VersionPlatformData<S extends AnyRecord = AnyRecord, P extends AnyRecord = AnyRecord>
  extends StrictVersionPlatformData<S, P>,
    AnyRecord {}

export const SVersionPrototypeStackFrame = s.object({
  nodeID: s.optional(s.nullable(s.string())),
  programID: s.string(),

  storage: s.optional(s.object()),
  commands: s.optional(s.array(SCommand)),
  variables: s.optional(s.object()),
});

export interface VersionPrototypeStackFrame<C extends BaseCommand = BaseCommand>
  extends Omit<s.StructType<typeof SVersionPrototypeStackFrame>, 'commands'> {
  commands?: C[];
}

export const SVersionPrototypeContext = s.partial({
  turn: s.object(),
  stack: s.array(SVersionPrototypeStackFrame),
  storage: s.object(),
  variables: s.object(),
});

export interface VersionPrototypeContext<C extends BaseCommand = BaseCommand> extends Omit<s.StructType<typeof SVersionPrototypeContext>, 'stack'> {
  stack?: VersionPrototypeStackFrame<C>[];
}

export const SVersionPrototypeData = s.object({
  name: s.string(),
  locales: s.array(s.string()),
});

export interface VersionPrototypeData<L extends string> extends Omit<s.StructType<typeof SVersionPrototypeData>, 'locales'> {
  locales: L[];
}

export const SVersionPrototypeSettings = s.object({
  layout: s.optional(s.string()),
  brandColor: s.optional(s.string()),
  brandImage: s.optional(s.string()),
  avatar: s.optional(s.string()),
  password: s.optional(s.string()),
  hasPassword: s.optional(s.boolean()),
  buttons: s.optional(s.string()),
});

export const SVersionPrototype = s.object({
  data: SVersionPrototypeData,
  model: SPrototypeModel,
  context: SVersionPrototypeContext,
  platform: SPlatform,
  settings: SVersionPrototypeSettings,
});

export interface VersionPrototype<C extends BaseCommand = BaseCommand, L extends string = string>
  extends Omit<s.StructType<typeof SVersionPrototype>, 'context' | 'data'> {
  data: VersionPrototypeData<L>;
  context: VersionPrototypeContext<C>;
}

export enum VersionFolderItemType {
  FOLDER = 'FOLDER',
  DIAGRAM = 'DIAGRAM',
}

export const sVersionFolderItemType = s.enums(Object.values(VersionFolderItemType));

export const sVersionFolderItem = s.object({
  type: sVersionFolderItemType,
  sourceID: s.string(),
});
export interface VersionFolderItem extends s.StructType<typeof sVersionFolderItem> {}

export const sVersionFolder = s.object({
  id: s.string(),
  name: s.string(),
  items: s.array(sVersionFolderItem),
});
export interface VersionFolder extends s.StructType<typeof sVersionFolder> {}

export const SVersion = s.object({
  _id: SVersionID,
  creatorID: SCreatorID,
  projectID: SProjectID,

  name: SName,
  topics: s.optional(s.array(sVersionFolderItem)),
  folders: s.optional(s.record(s.string(), sVersionFolder)),
  variables: s.array(SVariable),
  prototype: s.optional(SVersionPrototype),
  components: s.optional(s.array(sVersionFolderItem)),
  platformData: SVersionPlatformData,
  rootDiagramID: SDiagramID,
});

export interface Version<P extends VersionPlatformData, C extends BaseCommand = BaseCommand, L extends string = string>
  extends Omit<s.StructType<typeof SVersion>, 'prototype' | 'platformData'> {
  prototype?: VersionPrototype<C, L>;
  platformData: P;
}

export interface VersionDiagramResponce {
  id: string;
  type: string;
  flow: string;
  step: string;
  content: string;
}
