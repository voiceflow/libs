import { Node, Nullable } from '@voiceflow/base-types';

import { Prompt } from '@/types';

export interface StepNoReply<Voice> extends Node.Utils.StepNoReply<Prompt<Voice>> {}

export interface NodeNoReply extends Node.Utils.NodeNoReply<string> {}

export interface StepNoMatch<Voice> extends Node.Utils.StepNoMatch<Prompt<Voice>> {}

export interface NodeNoMatch extends Node.Utils.NodeNoMatch<string> {}

// TODO: remove deprecated types when fully migrating to StepNoReply/NodeNoReply/NodeNoMatch

/**
 * @deprecated use StepNoReply instead
 */
export interface StepReprompt<Voice> extends Node.Utils.StepReprompt<Prompt<Voice>> {}

/**
 * @deprecated use NodeNoReply instead
 */
export interface NodeReprompt extends Node.Utils.NodeReprompt<string> {}

/**
 * @deprecated use NodeNoMatch instead
 */
export interface DeprecatedNodeNoMatch extends Node.Utils.DeprecatedNodeNoMatch<string> {}

export interface NoMatchNode extends Node.Utils.BaseNode, DeprecatedNodeNoMatch {
  noMatch?: Nullable<NodeNoMatch>;
}

export interface NoReplyNode extends Node.Utils.BaseNode, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
