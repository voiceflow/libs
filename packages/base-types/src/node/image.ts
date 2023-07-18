import { BaseTraceFrame, TraceType } from './utils';

interface StepData {
  url: string;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.IMAGE;
}
