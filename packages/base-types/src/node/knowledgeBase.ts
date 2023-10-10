import { BaseResponseTrace, BaseTraceFrame, TraceType } from './utils';

export enum KnowledgeBaseCtxType {
  FAQ = 'faq',
  DOCUMENTS = 'documents',
}

interface AbstractKnowledgeBasePayload extends BaseResponseTrace {
  contextType: KnowledgeBaseCtxType;
}

export interface FAQPayload extends AbstractKnowledgeBasePayload {
  contextType: KnowledgeBaseCtxType.FAQ;
  faqQuestion: string;
  faqAnswer: string;
  query: string;
}

// TODO: Write DocumentsPayload for when KB response comes from the docs
export type KnowledgeBasePayload = FAQPayload;

export interface TraceFrame extends BaseTraceFrame<KnowledgeBasePayload> {
  type: TraceType.KNOWLEDGE_BASE;
}
