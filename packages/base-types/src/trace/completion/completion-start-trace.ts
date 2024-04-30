import { BaseTraceFrame, TraceType } from '@base-types/node/utils';

export interface CompletionStartTrace extends BaseTraceFrame<BaseCompletionStartTracePayload> {
  type: TraceType.COMPLETION_START;
}

export interface CompletionStartTraceSpeak extends CompletionStartTrace {
  payload: CompletionStartTraceSpeakPayload;
}

export interface CompletionStartTraceText extends CompletionStartTrace {
  payload: CompletionStartTraceTextPayload;
}

export type CompletionStartTracePayload = CompletionStartTraceSpeakPayload | CompletionStartTraceTextPayload;

export interface CompletionStartTraceSpeakPayload extends BaseCompletionStartTracePayload {
  type: TraceType.SPEAK;
  voice?: string;
}

export interface CompletionStartTraceTextPayload extends BaseCompletionStartTracePayload {
  type: TraceType.TEXT;
  delay?: number;
}

export interface BaseCompletionStartTracePayload {
  type: TraceType.TEXT | TraceType.SPEAK;
  completion: string;
  tokens?: {
    model: string;
    answer: number;
    query: number;
    total: number;
  };
}

export const isCompletionStartTrace = (trace: BaseTraceFrame): trace is CompletionStartTrace => trace.type === TraceType.COMPLETION_START;

export const isCompletionStartTraceSpeak = (trace: CompletionStartTrace): trace is CompletionStartTraceSpeak =>
  trace.payload.type === TraceType.SPEAK;

export const isCompletionStartTraceText = (trace: CompletionStartTrace): trace is CompletionStartTraceText => trace.payload.type === TraceType.TEXT;
