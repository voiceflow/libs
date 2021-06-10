import { TraceFrame as ExitTrace } from '@/nodes/exit';
import { TraceFrame as FlowTrace } from '@/nodes/flow';
import { TraceFrame as ChoiceTrace } from '@/nodes/interaction';
import { TraceFrame as SpeakTrace } from '@/nodes/speak';
import { TraceFrame as StreamTrace } from '@/nodes/stream';
import { BaseTraceFrame, TraceType } from '@/nodes/types';
import { TraceFrame as VisualTrace } from '@/nodes/visual';

export { TraceFrame as ExitTrace } from '@/nodes/exit';
export { TraceFrame as FlowTrace } from '@/nodes/flow';
export { TraceFrame as ChoiceTrace } from '@/nodes/interaction';
export { TraceFrame as SpeakTrace } from '@/nodes/speak';
export { TraceFrame as StreamTrace } from '@/nodes/stream';
export { TraceFrame as VisualTrace } from '@/nodes/visual';

export interface DebugTracePayload {
  message: string;
}

export interface DebugTrace extends BaseTraceFrame<DebugTracePayload> {
  type: TraceType.DEBUG;
}

export interface PathTracePayload {
  path: string;
}

export interface PathTrace extends BaseTraceFrame<PathTracePayload> {
  type: TraceType.PATH;
}

export interface BlockTracePayload {
  blockID: string;
}

export interface BlockTrace extends BaseTraceFrame<BlockTracePayload> {
  type: TraceType.BLOCK;
}

export type GeneralTrace = ExitTrace | SpeakTrace | ChoiceTrace | FlowTrace | StreamTrace | BlockTrace | DebugTrace | VisualTrace;
