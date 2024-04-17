import type { AnyRecord, EmptyObject, Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type { BaseStep } from './utils';

export interface StepData {
  domainID: Nullable<string>;
}

export interface Step<Data extends AnyRecord = StepData> extends BaseStep<Data, EmptyObject, []> {
  type: NodeType.GOTO_DOMAIN;
}
