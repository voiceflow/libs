import { AnyRecord } from '@voiceflow/common';

import { NodeType } from '../../node/constants';
import { BaseCommand, BaseNote, Intent, Slot, Variable } from '../base';
import { KnowledgeBase } from '../project/knowledgeBase';
import { CanvasTemplate } from './canvasTemplate';
import { Domain } from './domain';
import { NLUUnclassifiedData } from './nluUnclassifiedData';
import { Prototype } from './prototype';

export * from './canvasTemplate';
export * from './domain';
export * from './nluUnclassifiedData';
export * from './prototype';

export interface PrototypeVariableState {
  id: string;
  name: string;
  startFrom: {
    diagramID: string;
    stepID: string;
  } | null;
  variables: Record<string, string | number | boolean | null>;
}
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

export type DefaultStepColors = Partial<Record<NodeType, string>>;

export interface CustomBlock {
  key: string;
  name: string;
  parameters: Record<
    string,
    {
      id: string;
      name: string;
    }
  >;
  body: string;
  stop: boolean;
  paths: string[];
  defaultPath: number;
}

export interface Model<
  _PlatformData extends PlatformData,
  Command extends BaseCommand = BaseCommand,
  Locale extends string = string,
  SurveyContextExt extends AnyRecord = AnyRecord
> {
  _id: string;
  _version?: number;
  creatorID: number;
  projectID: string;
  rootDiagramID: string;

  name: string;
  notes?: Record<string, BaseNote>;
  domains?: Domain[];
  folders?: Record<string, Folder>;
  variables: Variable[];
  prototype?: Prototype<Command, Locale, SurveyContextExt>;
  components?: FolderItem[];
  platformData: _PlatformData;
  canvasTemplates?: CanvasTemplate[];
  templateDiagramID?: string;
  defaultStepColors?: DefaultStepColors;

  manualSave: boolean;
  autoSaveFromRestore: boolean;

  customBlocks?: Record<string, CustomBlock>;
  knowledgeBase?: KnowledgeBase;

  /**
   * @deprecated replaced with domains
   */
  topics?: FolderItem[];

  nluUnclassifiedData?: NLUUnclassifiedData[];
}
