import type { BaseNode, BaseText } from '@voiceflow/base-types';

export type VoiceflowPrompt = BaseText.SlateTextValue | string;

export interface NoMatchNode extends BaseNode.Utils.BaseNode, BaseNode.Utils.DeprecatedNodeNoMatch<VoiceflowPrompt> {
  noMatch?: BaseNode.Utils.NodeNoMatch<VoiceflowPrompt> | null;
}

export interface NoReplyNode extends BaseNode.Utils.BaseNode, BaseNode.Utils.NodeReprompt<VoiceflowPrompt> {
  noReply?: BaseNode.Utils.NodeNoReply<VoiceflowPrompt> | null;
}
