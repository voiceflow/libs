import { AIContextParams, AIModelParams } from '@base-types/utils/ai';

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
  version?: number;
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

export interface KnowledgeBase {
  settings?: KnowledgeBaseSettings;
  documents: Record<string, KnowledgeBaseDocument>;
}
