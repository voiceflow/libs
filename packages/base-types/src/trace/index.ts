import { TraceFrame as CardTrace } from '@base-types/node/card';
import { TraceFrame as CardV2Trace } from '@base-types/node/cardV2';
import { TraceFrame as CarouselTrace } from '@base-types/node/carousel';
import { TraceFrame as ExitTrace } from '@base-types/node/exit';
import { TraceFrame as FlowTrace } from '@base-types/node/flow';
import { TraceFrame as ChoiceTrace } from '@base-types/node/interaction';
import { TraceFrame as SpeakTrace } from '@base-types/node/speak';
import { TraceFrame as StreamTrace } from '@base-types/node/stream';
import { TraceFrame as TextTrace } from '@base-types/node/text';
import { BaseTraceFrame, TraceType } from '@base-types/node/utils';
import { TraceFrame as VisualTrace } from '@base-types/node/visual';
import { IntentRequest } from '@base-types/request';
import { Log as RuntimeLog } from '@base-types/runtimeLogs';

export { TraceFrame as CardTrace } from '@base-types/node/card';
export { TraceFrame as CardV2Trace } from '@base-types/node/cardV2';
export { TraceFrame as CarouselTrace } from '@base-types/node/carousel';
export { TraceFrame as ExitTrace } from '@base-types/node/exit';
export { TraceFrame as FlowTrace } from '@base-types/node/flow';
export { TraceFrame as ChoiceTrace } from '@base-types/node/interaction';
export { TraceFrame as SpeakTrace } from '@base-types/node/speak';
export { TraceFrame as StreamTrace } from '@base-types/node/stream';
export { TraceFrame as TextTrace } from '@base-types/node/text';
export { TraceType } from '@base-types/node/utils/trace';
export { TraceFrame as VisualTrace } from '@base-types/node/visual';

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

export type LogTracePayload = RuntimeLog;

export interface LogTrace extends BaseTraceFrame<LogTracePayload> {
  type: TraceType.LOG;
}

export type AnyTrace =
  | LogTrace
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
  | CarouselTrace
  | CardV2Trace
  | CardTrace
  | EntityFillingTrace;
