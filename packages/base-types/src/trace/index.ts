import type { TraceFrame as CardV2Trace } from '@base-types/node/cardV2';
import type { TraceFrame as CarouselTrace } from '@base-types/node/carousel';
import type { TraceFrame as ExitTrace } from '@base-types/node/exit';
import type { TraceFrame as FlowTrace } from '@base-types/node/flow';
import type { TraceFrame as ChoiceTrace } from '@base-types/node/interaction';
import type { TraceFrame as SpeakTrace } from '@base-types/node/speak';
import type { TraceFrame as StreamTrace } from '@base-types/node/stream';
import type { TraceFrame as TextTrace } from '@base-types/node/text';
import type { BaseTraceFrame, TraceType } from '@base-types/node/utils';
import type { TraceFrame as VisualTrace } from '@base-types/node/visual';
import type { IntentRequest } from '@base-types/request';
import type { Log as RuntimeLog } from '@base-types/runtimeLogs';
import type { AnyRecord } from '@voiceflow/common';

export { TraceFrame as CardV2 } from '@base-types/node/cardV2';
export { TraceFrame as Carousel } from '@base-types/node/carousel';
export { TraceFrame as End } from '@base-types/node/exit';
export { TraceFrame as Flow } from '@base-types/node/flow';
export { TraceFrame as Choice } from '@base-types/node/interaction';
export { TraceFrame as KnowledgeBase } from '@base-types/node/knowledgeBase';
export { TraceFrame as Speak } from '@base-types/node/speak';
export { TraceFrame as Stream } from '@base-types/node/stream';
export { TraceFrame as Text } from '@base-types/node/text';
export { BaseTraceFrame, TraceType } from '@base-types/node/utils/trace';
export { TraceFrame as Visual } from '@base-types/node/visual';

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

export interface CompletionStartTrace
  extends BaseTraceFrame<{
    type: TraceType.SPEAK | TraceType.TEXT;
    completion: string;
    voice?: string;
    delay?: number;
    tokens?: {
      model: string;
      answer: number;
      query: number;
      total: number;
    };
  }> {
  type: TraceType.COMPLETION_START;
}

export interface CompletionContinueTrace
  extends BaseTraceFrame<{
    completion: string;
    tokens?: {
      answer: number;
      query: number;
      total: number;
    };
  }> {
  type: TraceType.COMPLETION_CONTINUE;
}

export interface CompletionEndTrace extends BaseTraceFrame {
  type: TraceType.COMPLETION_END;
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
  | CompletionStartTrace
  | CompletionContinueTrace
  | CompletionEndTrace;
