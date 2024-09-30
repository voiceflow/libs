import type { BaseTraceFrame, TraceType } from '@base-types/node/utils';

export interface CompletionTrace
  extends BaseTraceFrame<CompletionStartPayload | CompletionContentPayload | CompletionEndPayload> {
  type: TraceType.COMPLETION;
}

export enum CompletionState {
  START = 'start',
  CONTENT = 'content',
  END = 'end',
}

export interface CompletionStartPayload {
  state: CompletionState.START;
}

export interface CompletionContentPayload {
  state: CompletionState.CONTENT;
  content: string;
}

export interface CompletionEndPayload {
  state: CompletionState.END;
}
