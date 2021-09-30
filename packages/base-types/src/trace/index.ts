import { TraceFrame as ExitTrace } from '@/node/exit';
import { TraceFrame as FlowTrace } from '@/node/flow';
import { TraceFrame as ChoiceTrace } from '@/node/interaction';
import { TraceFrame as SpeakTrace, TraceFramePayload as SpeakTracePayload } from '@/node/speak';
import { TraceFrame as StreamTrace } from '@/node/stream';
import { TextTracePayload, TraceFrame as TextTrace } from '@/node/text';
import { BaseTraceFrame, TraceType } from '@/node/utils';
import { TraceFrame as VisualTrace } from '@/node/visual';

export { TraceFrame as ExitTrace } from '@/node/exit';
export { TraceFrame as FlowTrace } from '@/node/flow';
export { TraceFrame as ChoiceTrace } from '@/node/interaction';
export { TraceFrame as SpeakTrace } from '@/node/speak';
export { TraceFrame as StreamTrace } from '@/node/stream';
export { TraceFrame as TextTrace } from '@/node/text';
export { TraceFrame as VisualTrace } from '@/node/visual';

export interface DebugTracePayload {
  type?: string;
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

export interface NoReplyResponseTrace extends BaseTraceFrame<SpeakTracePayload | TextTracePayload> {
  type: TraceType.NO_REPLY_RESPONSE;
}

export type AnyTrace =
  | ExitTrace
  | SpeakTrace
  | ChoiceTrace
  | FlowTrace
  | StreamTrace
  | BlockTrace
  | DebugTrace
  | VisualTrace
  | TextTrace
  | NoReplyResponseTrace;
