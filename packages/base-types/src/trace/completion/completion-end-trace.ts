import type { BaseTraceFrame } from '@base-types/node/utils';
import { TraceType } from '@base-types/node/utils';

export interface CompletionEndTrace extends BaseTraceFrame {
  type: TraceType.COMPLETION_END;
  tokens: {
    answer: number;
    query: number;
    total: number;
  };
}

export const isCompletionEndTrace = (trace: BaseTraceFrame): trace is CompletionEndTrace =>
  trace.type === TraceType.COMPLETION_END;
