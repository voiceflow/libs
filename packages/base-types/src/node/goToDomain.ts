import { AnyRecord, EmptyObject, Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseStep } from './utils';

export interface StepData {
  domainID: Nullable<string>;
}

export interface Step<Data extends AnyRecord = StepData> extends BaseStep<Data, EmptyObject, []> {
  type: NodeType.GOTO_DOMAIN;
}
