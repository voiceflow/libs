import { AnyRecord } from '@voiceflow/common';

import { LinkType } from '../base/link';
import { Member } from './member';
import { Prototype } from './prototype';
import { Themes } from './theme';

export { LinkType } from '../base/link';
export * from './member';
export * from './prototype';
export * from './theme';

export enum Privacy {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface ReportTag {
  tagID: string;
  label: string;
}

export interface Sticker {
  id: string;
  url: string;
}

export interface AIAssistSettings {
  aiPlayground?: boolean;
  generateStep?: boolean;
  generateNoMatch?: boolean;
  generativeTasks?: boolean;
}

export enum KnowledgeBaseDocumentType {
  PDF = 'pdf',
  TEXT = 'text',
  URL = 'url',
}

export interface KnowledgeBaseData {
  type: KnowledgeBaseDocumentType;
  name: string;
}

export interface KnowledgeBasePDF extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.PDF;
  name: string;
}

export interface KnowledgeBaseText extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.TEXT;
  name: string;
}

export interface KnowledgeBaseURL extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.URL;
  name: string;
  url: string;
}

export enum KnowledgeBaseDocumentStatus {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  INITIALIZED = 'INITIALIZED',
}

export interface KnowledgeBaseDocument {
  data: KnowledgeBasePDF | KnowledgeBaseText | KnowledgeBaseURL;
  status: {
    type: KnowledgeBaseDocumentStatus;
    data?: unknown;
  };
  creatorID: number;
  updatedAt: Date;
  documentID: string;
  s3ObjectRef: string;
}

export interface Model<PlatformData extends AnyRecord, MemberPlatformData extends AnyRecord> {
  _id: string;
  teamID: string;
  _version?: number;
  creatorID: number;
  devVersion?: string;
  liveVersion?: string;

  name: string;
  type?: string; // chat | voice | etc
  image?: string;
  privacy?: Privacy;
  platform: string; // voiceflow | alexa | google | etc
  stickers?: Sticker[];
  linkType?: LinkType;
  prototype?: Prototype;
  apiPrivacy?: Privacy;
  reportTags?: Record<string, ReportTag>;
  customThemes: Themes;
  updatedAt?: string;
  updatedBy?: number;
  aiAssistSettings?: AIAssistSettings;

  members: Member<MemberPlatformData>[];
  platformData: PlatformData;

  knowledgeBase?: Record<string, KnowledgeBaseDocument>;
}
