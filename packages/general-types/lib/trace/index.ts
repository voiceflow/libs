import { TraceFrame as ExitTrace } from '@/nodes/exit';
import { TraceFrame as FlowTrace } from '@/nodes/flow';
import { TraceFrame as ChoiceTrace } from '@/nodes/interaction';
import { TraceFrame as SpeakTrace } from '@/nodes/speak';
import { TraceFrame as StreamTrace } from '@/nodes/stream';
import { TraceFrame, TraceType } from '@/nodes/types';

export type DebugTrace = TraceFrame<TraceType.DEBUG, { message: string }>;
export type BlockTrace = TraceFrame<TraceType.BLOCK, { blockID: string }>;

export type GeneralTrace = ExitTrace | SpeakTrace | ChoiceTrace | FlowTrace | StreamTrace | BlockTrace | DebugTrace;
