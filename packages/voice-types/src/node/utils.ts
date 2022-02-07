import { BaseNode, Nullable } from '@voiceflow/base-types';

import { Prompt } from '@/models';

export interface StepNoReply<Voice> extends BaseNode.Utils.StepNoReply<Prompt<Voice>> {}

export interface NodeNoReply extends BaseNode.Utils.NodeNoReply<string> {}

export interface StepNoMatch<Voice> extends BaseNode.Utils.StepNoMatch<Prompt<Voice>> {}

export interface NodeNoMatch extends BaseNode.Utils.NodeNoMatch<string> {}

// TODO: remove deprecated types when fully migrating to StepNoReply/NodeNoReply/NodeNoMatch

/**
 * @deprecated use StepNoReply instead
 */
export interface StepReprompt<Voice> extends BaseNode.Utils.StepReprompt<Prompt<Voice>> {}

/**
 * @deprecated use NodeNoReply instead
 */
export interface NodeReprompt extends BaseNode.Utils.NodeReprompt<string> {}

/**
 * @deprecated use NodeNoMatch instead
 */
export interface DeprecatedNodeNoMatch extends BaseNode.Utils.DeprecatedNodeNoMatch<string> {}

export interface NoMatchNode extends BaseNode.Utils.BaseNode, DeprecatedNodeNoMatch {
  noMatch?: Nullable<NodeNoMatch>;
}

export interface NoReplyNode extends BaseNode.Utils.BaseNode, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
