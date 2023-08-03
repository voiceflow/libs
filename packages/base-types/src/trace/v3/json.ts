import { BaseTraceFrame, TraceType } from '../../node/utils';

interface StepData {
  json: unknown;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.V3_JSON;
}
