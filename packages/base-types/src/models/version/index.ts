import { AnyRecord } from '@/utils';

import { BaseCommand, Intent, Slot, Variable } from '../base';
import { Prototype } from './prototype';

export * from './prototype';

export interface PlatformData<Settings extends AnyRecord = AnyRecord, Publishing extends AnyRecord = AnyRecord> {
  slots: Slot[];
  intents: Intent[];
  settings: Settings;
  publishing: Publishing;
}

export interface DiagramResponse {
  blockID: string;
  diagramID: string;

  blockName: string;
  blockColor: string;
  diagramName: string;
  blockContent: string;
}

export enum FolderItemType {
  FOLDER = 'FOLDER',
  DIAGRAM = 'DIAGRAM',
}

export interface FolderItem {
  type: FolderItemType;
  sourceID: string;
}

export interface Folder {
  id: string;
  name: string;
  items: FolderItem[];
}

export interface Model<_PlatformData extends PlatformData, Command extends BaseCommand = BaseCommand, Locale extends string = string> {
  _id: string;
  creatorID: number;
  projectID: string;
  rootDiagramID: string;

  name: string;
  topics?: FolderItem[];
  folders?: Record<string, Folder>;
  variables: Variable[];
  prototype?: Prototype<Command, Locale>;
  components?: FolderItem[];
  platformData: _PlatformData;
}
