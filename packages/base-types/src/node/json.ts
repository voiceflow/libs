import { BaseTraceFrame, TraceType } from './utils';

interface StepData {
  json: string;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.JSON;
}
