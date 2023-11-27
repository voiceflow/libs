import { AIContextParams, AIModelParams } from '@base-types/utils/ai';

export enum KnowledgeBaseDocumentType {
  PDF = 'pdf',
  TEXT = 'text',
  URL = 'url',
  DOCX = 'docx',
}

export declare enum KnowledgeBaseBooleanOperators {
  AND = 'and',
  OR = 'or',
}

export interface KnowledgeBaseTagsFilterWithOperator {
  items: string[];
  operator?: KnowledgeBaseBooleanOperators;
}

export interface KnowledgeBaseTagsFilter {
  include?: KnowledgeBaseTagsFilterWithOperator;
  exclude?: KnowledgeBaseTagsFilterWithOperator;
  includeAllTagged?: boolean;
  includeAllNonTagged?: boolean;
}

export interface KnowledgeBaseData {
  type: KnowledgeBaseDocumentType;
  name: string;
}

export interface KnowledgeBasePDF extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.PDF;
  name: string;
}

export interface KnowledgeBaseDocx extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.DOCX;
  name: string;
}

export interface KnowledgeBaseText extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.TEXT;
  name: string;
  canEdit?: boolean;
}

export enum KnowledgeBaseRefresh {
  NEVER = 'never',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export interface KnowledgeBaseURL extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.URL;
  name: string;
  url: string;
  refresh?: KnowledgeBaseRefresh;
}

export enum KnowledgeBaseDocumentStatus {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  INITIALIZED = 'INITIALIZED',
}

export interface KBTag {
  tagID: string;
  label: string;
}

export interface KnowledgeBaseDocument {
  data: KnowledgeBasePDF | KnowledgeBaseText | KnowledgeBaseURL | KnowledgeBaseDocx;
  status: {
    type: KnowledgeBaseDocumentStatus;
    data?: unknown;
  };
  creatorID: number;
  updatedAt: Date;
  documentID: string;
  s3ObjectRef: string;
  version?: number;
  tags?: string[];
}

export enum ChunkStrategyType {
  RECURSIVE_TEXT_SPLITTER = 'recursive_text_splitter',
}

export interface RecursiveTextSplitter {
  type: ChunkStrategyType.RECURSIVE_TEXT_SPLITTER;
  size?: number;
  overlap?: number;
}

export interface KnowledgeBaseSettings {
  chunkStrategy: RecursiveTextSplitter;
  summarization: AIModelParams & AIContextParams;
  search: {
    limit: number;
    metric: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface KnowledgeBaseSetFaq {
  name: string;
  status: {
    type: KnowledgeBaseDocumentStatus;
    data?: unknown;
  };
  creatorID: number;
  updatedAt: Date;
  faqSetID: string;
  version?: number;
  tags?: string[];
}

export interface KnowledgeBase {
  settings?: KnowledgeBaseSettings;
  documents: Record<string, KnowledgeBaseDocument>;
  tags?: Record<string, KBTag>;
  faqSets?: Record<string, KnowledgeBaseSetFaq>;
}
