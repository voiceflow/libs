import type { BaseNode, BaseText, Nullable } from '@voiceflow/base-types';

import type { NodeNoMatch, NodeNoReply, StepNoMatch, StepNoReply } from './utils';

export interface StepData extends BaseNode.CardV2.StepData {
  description: BaseText.SlateTextValue;
  noReply?: Nullable<StepNoReply>;
  noMatch?: Nullable<StepNoMatch>;
}
export interface Step<Data = StepData> extends BaseNode.CardV2.Step<Data> {}

export interface Node extends BaseNode.CardV2.Node {
  description: BaseText.SlateTextValue;
  noReply?: Nullable<NodeNoReply>;
  noMatch?: Nullable<NodeNoMatch>;
}
