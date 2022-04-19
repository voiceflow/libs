import { BaseNode, Nullable } from '@voiceflow/base-types';

import { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface StepData extends BaseNode.CardV2.StepData {
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;
}

export interface Step<Data = StepData> extends BaseNode.CardV2.Step<Data> {}

export interface Node extends BaseNode.CardV2.Node {
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
