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
import { AnyRecord } from '@voiceflow/common';

import * as V3 from './v3';

export { TraceFrame as CardV2 } from '@base-types/node/cardV2';
export { TraceFrame as Carousel } from '@base-types/node/carousel';
export { TraceFrame as End } from '@base-types/node/exit';
export { TraceFrame as Flow } from '@base-types/node/flow';
export { TraceFrame as Choice } from '@base-types/node/interaction';
export { TraceFrame as Speak } from '@base-types/node/speak';
export { TraceFrame as Stream } from '@base-types/node/stream';
export { TraceFrame as Text } from '@base-types/node/text';
export { BaseTraceFrame, TraceType } from '@base-types/node/utils/trace';
export { TraceFrame as Visual } from '@base-types/node/visual';

// Voiceflow V3
export * as V3 from './v3';

/** @deprecated */
export { TraceFrame as CarouselTrace } from '@base-types/node/carousel';
/** @deprecated */
export { TraceFrame as ExitTrace } from '@base-types/node/exit';
/** @deprecated */
export { TraceFrame as FlowTrace } from '@base-types/node/flow';
/** @deprecated */
export { TraceFrame as ChoiceTrace } from '@base-types/node/interaction';
/** @deprecated */
export { TraceFrame as SpeakTrace } from '@base-types/node/speak';
/** @deprecated */
export { TraceFrame as StreamTrace } from '@base-types/node/stream';
/** @deprecated */
export { TraceFrame as TextTrace } from '@base-types/node/text';
/** @deprecated */
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

export interface ChannelActionTracePayload {
  name: string;
  payload: AnyRecord;
}

export interface ChannelActionTrace extends BaseTraceFrame<ChannelActionTracePayload> {
  type: TraceType.CHANNEL_ACTION;
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
  | EntityFillingTrace
  | ChannelActionTrace
  // V3 traces
  | V3.ImageTrace
  | V3.JSONTrace
  | V3.VideoTrace
  | V3.TextTrace;
