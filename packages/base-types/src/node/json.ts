import { BaseTraceFrame, TraceType } from './utils';

interface StepData {
  json: unknown;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.JSON;
}
