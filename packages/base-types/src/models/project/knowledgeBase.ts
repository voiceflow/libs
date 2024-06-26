import type { AIKnowledgeContextParams, AIModelParams } from '@base-types/utils/ai';

export enum KnowledgeBaseDocumentType {
  PDF = 'pdf',
  TEXT = 'text',
  URL = 'url',
  DOCX = 'docx',
  TABLE = 'table',
}

export enum KnowledgeBaseDocumentRefreshRate {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  NEVER = 'never',
}

export enum KnowledgeBaseBooleanOperators {
  AND = 'and',
  OR = 'or',
}

export enum IntegrationTypes {
  ZENDESK = 'zendesk',
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
}

export interface KnowledgeBaseDocx extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.DOCX;
}

export interface KnowledgeBaseText extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.TEXT;
  canEdit?: boolean;
}

export interface KnowledgeBaseURL extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.URL;
  url: string;
  refreshRate?: KnowledgeBaseDocumentRefreshRate;
  lastSuccessUpdate?: string;

  /* ****** Integrations related fields ****** */
  accessTokenID?: number; // ID of access token connected to that doc
  integrationExternalID?: string; // integration Provider internal doc ID
  source?: IntegrationTypes; // type of integration
}

export interface KnowledgeBaseTable extends KnowledgeBaseData {
  type: KnowledgeBaseDocumentType.TABLE;
  rowsCount: number;
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
  data: KnowledgeBasePDF | KnowledgeBaseText | KnowledgeBaseURL | KnowledgeBaseDocx | KnowledgeBaseTable;
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

export interface EmbeddingModel {
  model: string;
  size: number;
}

export interface KnowledgeBaseSettings {
  chunkStrategy: RecursiveTextSplitter;
  summarization: AIModelParams & AIKnowledgeContextParams;
  search: {
    limit: number;
    metric: string;
  };
  embeddingModel?: EmbeddingModel;
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
