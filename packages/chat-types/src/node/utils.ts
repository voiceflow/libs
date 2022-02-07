import { BaseNode, BaseText, Nullable } from '@voiceflow/base-types';

import { Prompt } from '@/models';

export interface StepNoReply extends BaseNode.Utils.StepNoReply<Prompt> {}

export interface NodeNoReply extends BaseNode.Utils.NodeNoReply<BaseText.SlateTextValue> {}

export interface StepNoMatch extends BaseNode.Utils.StepNoMatch<Prompt> {}

export interface NodeNoMatch extends BaseNode.Utils.NodeNoMatch<BaseText.SlateTextValue> {}

// TODO: remove deprecated types when fully migrating to StepNoReply/NodeNoReply/NodeNoMatch

/**
 * @deprecated use StepNoReply instead
 */
export interface StepReprompt extends BaseNode.Utils.StepReprompt<Prompt> {}

/**
 * @deprecated use NodeNoReply instead
 */
export interface NodeReprompt extends BaseNode.Utils.NodeReprompt<BaseText.SlateTextValue> {}

/**
 * @deprecated use NodeNoMatch instead
 */
export interface DeprecatedNodeNoMatch extends BaseNode.Utils.DeprecatedNodeNoMatch<BaseText.SlateTextValue> {}

export interface NoMatchNode extends BaseNode.Utils.BaseNode, DeprecatedNodeNoMatch {
  noMatch?: Nullable<NodeNoMatch>;
}

export interface NoReplyNode extends BaseNode.Utils.BaseNode, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
