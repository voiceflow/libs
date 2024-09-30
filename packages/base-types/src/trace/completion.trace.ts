import type { BaseTraceFrame, TraceType } from '@base-types/node/utils';

export interface CompletionTrace extends BaseTraceFrame<CompletionTracePayload | CompletionFinishTracePayload> {
  type: TraceType.COMPLETION;
}

export interface CompletionFinishTracePayload extends CompletionTracePayload {
  finished: true;
  tokens: {
    answer: number;
    query: number;
    total: number;
  };
}

export interface CompletionTracePayload {
  completion: string;
}
