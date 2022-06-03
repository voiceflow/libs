import { BaseNode, Nullable } from '@voiceflow/base-types';

import { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface StepData extends BaseNode.Carousel.StepData {
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;
}

export interface Step<Data = StepData> extends BaseNode.Carousel.Step<Data> {}

export interface Node extends BaseNode.Carousel.Node {
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
