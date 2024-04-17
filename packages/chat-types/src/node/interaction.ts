import type { BaseButton, BaseNode, BaseRequest, Nullable } from '@voiceflow/base-types';

import type {
  DeprecatedNodeNoMatch,
  NodeNoMatch,
  NodeNoReply,
  NodeReprompt,
  StepNoMatch,
  StepNoReply,
  StepReprompt,
} from './utils';

export interface StepData extends BaseNode.Interaction.StepData, BaseButton.StepButton, StepReprompt {
  noMatch?: Nullable<StepNoMatch>;
  noReply?: Nullable<StepNoReply>;

  /**
   * @deprecated use noMatch instead
   */
  else?: StepNoMatch;
}

export interface Step<Data = StepData> extends BaseNode.Interaction.Step<Data> {}

export interface Node<Event = BaseNode.Utils.BaseEvent>
  extends BaseNode.Interaction.Node<Event>,
    BaseRequest.NodeButton,
    DeprecatedNodeNoMatch,
    NodeReprompt {
  noMatch?: Nullable<NodeNoMatch>;
  noReply?: Nullable<NodeNoReply>;
}
