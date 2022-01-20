import { TraceFrame as ExitTrace } from '@/node/exit';
import { TraceFrame as FlowTrace } from '@/node/flow';
import { TraceFrame as ChoiceTrace } from '@/node/interaction';
import { TraceFrame as SpeakTrace } from '@/node/speak';
import { TraceFrame as StreamTrace } from '@/node/stream';
import { TraceFrame as TextTrace } from '@/node/text';
import { BaseTraceFrame, TraceType } from '@/node/utils';
import { TraceFrame as VisualTrace } from '@/node/visual';
import { IntentRequest } from '@/request';

export { TraceFrame as ExitTrace } from '@/node/exit';
export { TraceFrame as FlowTrace } from '@/node/flow';
export { TraceFrame as ChoiceTrace } from '@/node/interaction';
export { TraceFrame as SpeakTrace } from '@/node/speak';
export { TraceFrame as StreamTrace } from '@/node/stream';
export { TraceFrame as TextTrace } from '@/node/text';
export { TraceType } from '@/node/utils/trace';
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

export interface GoToTracePayload {
  request: IntentRequest;
}

export interface GoToTrace extends BaseTraceFrame<GoToTracePayload> {
  type: TraceType.GOTO;
}

export interface BlockTracePayload {
  blockID: string;
}

export interface BlockTrace extends BaseTraceFrame<BlockTracePayload> {
  type: TraceType.BLOCK;
}

export interface NoReplyTracePayload {
  timeout: number;
}

export interface NoReplyTrace extends BaseTraceFrame<NoReplyTracePayload> {
  type: TraceType.NO_REPLY;
}

export interface EntityFillingTracePayload {
  entityToFill: string;
  intent: IntentRequest;
}
export interface EntityFillingTrace extends BaseTraceFrame<EntityFillingTracePayload> {
  type: TraceType.ENTITY_FILLING;
}

export type AnyTrace =
  | ExitTrace
  | TextTrace
  | GoToTrace
  | FlowTrace
  | SpeakTrace
  | BlockTrace
  | DebugTrace
  | ChoiceTrace
  | StreamTrace
  | VisualTrace
  | NoReplyTrace
  | EntityFillingTrace;
