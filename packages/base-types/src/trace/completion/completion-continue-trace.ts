import type { BaseTraceFrame } from '@base-types/node/utils';
import { TraceType } from '@base-types/node/utils';

export interface CompletionContinueTrace extends BaseTraceFrame<CompletionContinueTracePayload> {
  type: TraceType.COMPLETION_CONTINUE;
}

export interface CompletionContinueTracePayload {
  completion: string;
}

export const isCompletionContinueTrace = (trace: BaseTraceFrame): trace is CompletionContinueTrace =>
  trace.type === TraceType.COMPLETION_CONTINUE;
