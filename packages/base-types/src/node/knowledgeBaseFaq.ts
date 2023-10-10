import { BaseResponseTrace, BaseTraceFrame, TraceType } from './utils';


export interface TraceFramePayload extends BaseResponseTrace {
  faqQuestion?: string;
  faqAnswer?: string;
  query?: string;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.KNOWLEDGE_BASE_FAQ;
}