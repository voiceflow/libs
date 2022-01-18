import { AnyRecord, Nullable } from '../utils';
import { BaseCommand, CreatorID, DiagramID, Intent, Name, Platform, ProjectID, PrototypeModel, Slot, Variable, VersionID } from './shared';

export type VersionPlatformDataSettings = Record<string, any>;

export type VersionPlatformDataPublishing = Record<string, any>;

export interface StrictVersionPlatformData<S extends AnyRecord = AnyRecord, P extends AnyRecord = AnyRecord> {
  slots: Slot[];
  intents: Intent[];
  settings: S;
  publishing: P;
}

export interface VersionPlatformData<S extends AnyRecord = AnyRecord, P extends AnyRecord = AnyRecord>
  extends StrictVersionPlatformData<S, P>,
    AnyRecord {}

export interface VersionPrototypeStackFrame<C extends BaseCommand = BaseCommand> {
  nodeID?: Nullable<string>;
  programID: string;
  storage?: Record<string, any>;
  variables?: Record<string, any>;
  commands?: C[];
}

export interface VersionPrototypeContext<C extends BaseCommand = BaseCommand> {
  turn?: Record<string, any>;
  storage?: Record<string, any>;
  variables?: Record<string, any>;
  stack?: VersionPrototypeStackFrame<C>[];
}

export interface VersionPrototypeData<L extends string> {
  name: string;
  locales: L[];
  messageDelay?: {
    durationMilliseconds: number;
  };
}

export interface VersionPrototypeSettings {
  layout?: string;
  brandColor?: string;
  brandImage?: string;
  avatar?: string;
  password?: string;
  hasPassword?: boolean;
  buttons?: string;
}

export interface VersionPrototype<C extends BaseCommand = BaseCommand, L extends string = string> {
  model: PrototypeModel;
  platform: Platform;
  settings: VersionPrototypeSettings;
  data: VersionPrototypeData<L>;
  context: VersionPrototypeContext<C>;
}

export enum VersionFolderItemType {
  FOLDER = 'FOLDER',
  DIAGRAM = 'DIAGRAM',
}

export interface VersionFolderItem {
  type: VersionFolderItemType;
  sourceID: string;
}

export interface VersionFolder {
  id: string;
  name: string;
  items: VersionFolderItem[];
}

export interface Version<P extends VersionPlatformData, C extends BaseCommand = BaseCommand, L extends string = string> {
  _id: VersionID;
  creatorID: CreatorID;
  projectID: ProjectID;
  name: Name;
  topics?: VersionFolderItem[];
  folders?: Record<string, VersionFolder>;
  variables: Variable[];
  components?: VersionFolderItem[];
  rootDiagramID: DiagramID;
  prototype?: VersionPrototype<C, L>;
  platformData: P;
}

export interface VersionDiagramResponse {
  blockID: string;
  blockName: string;
  diagramID: string;
  blockColor: string;
  diagramName: string;
  blockContent: string;
}
