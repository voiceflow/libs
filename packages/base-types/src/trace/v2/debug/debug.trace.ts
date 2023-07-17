import { BaseTraceFrame, DebugTracePayload, TraceType } from '@base-types/trace';

export interface TraceFrame extends BaseTraceFrame<DebugTracePayload> {
  type: TraceType.DEBUG;
}
