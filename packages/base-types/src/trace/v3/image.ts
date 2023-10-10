import { BaseTraceFrame, TraceType } from '../../node/utils';

interface StepData {
  url: string;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.V3_IMAGE;
}
