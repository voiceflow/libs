/* eslint-disable @typescript-eslint/no-empty-interface */

import { Node, Nullable, Text } from '@voiceflow/base-types';

import { Prompt } from '@/types';

export interface StepNoReply extends Node.Utils.StepNoReply<Prompt> {}

export interface NodeNoReply extends Node.Utils.NodeNoReply<Text.SlateTextValue> {}

export interface StepNoMatch extends Node.Utils.StepNoMatch<Prompt> {}

export interface NodeNoMatch extends Node.Utils.NodeNoMatch<Text.SlateTextValue> {}

// TODO: remove deprecated types when fully migrating to StepNoReply/NodeNoReply/NodeNoMatch

/**
 * @deprecated use StepNoReply instead
 */
export interface StepReprompt extends Node.Utils.StepReprompt<Prompt> {}

/**
 * @deprecated use NodeNoReply instead
 */
export interface NodeReprompt extends Node.Utils.NodeReprompt<Text.SlateTextValue> {}

/**
 * @deprecated use NodeNoMatch instead
 */
export interface DeprecatedNodeNoMatch extends Node.Utils.DeprecatedNodeNoMatch<Text.SlateTextValue> {}

export interface NoMatchNode extends Node.Utils.BaseNode, DeprecatedNodeNoMatch {
  noMatch?: Nullable<NodeNoMatch>;
}

export interface NoReplyNode extends Node.Utils.BaseNode, NodeReprompt {
  noReply?: Nullable<NodeNoReply>;
}
