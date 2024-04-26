import { BaseTraceFrame, TraceType } from '@base-types/node/utils';

export interface CompletionEndTrace extends BaseTraceFrame {
  type: TraceType.COMPLETION_END;
}

export const isCompletionEndTrace = (trace: BaseTraceFrame): trace is CompletionEndTrace => trace.type === TraceType.COMPLETION_END;
