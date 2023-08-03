import { Markup } from '@base-types/markup';

import { BaseTraceFrame, TraceType } from '../../node/utils';

interface StepData {
  content: Markup;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.V3_TEXT;
}
