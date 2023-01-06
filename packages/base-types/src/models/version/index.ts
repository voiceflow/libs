import { AnyRecord } from '@voiceflow/common';

import { NodeType } from '../../node/constants';
import { BaseCommand, BaseNote, Intent, Slot, Variable } from '../base';
import { CanvasTemplate } from './canvasTemplate';
import { Domain } from './domain';
import { Prototype } from './prototype';

export * from './canvasTemplate';
export * from './domain';
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

export type DefaultStepColors = Partial<Record<NodeType, string>>;

export enum NLUUnclassifiedDataType {
  CONVERSATION = 'conversation',
  PROTOTYPE = 'prototype',
  NLU_DATASOURCE_IMPORT = 'nluDatasourceImport',
}

export interface NLUUnclassifiedUtterances {
  id: string;
  utterance: string;
  sourceID?: string;
  importedAt: Date;
}

export interface NLUUnclassifiedData {
  datasourceID: string;
  creatorID?: number;
  type: NLUUnclassifiedDataType;
  name: string;
  utterances: NLUUnclassifiedUtterances[];
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

  /**
   * @deprecated replaced with domains
   */
  topics?: FolderItem[];

  nluUnclassifiedData?: NLUUnclassifiedData[];
}
