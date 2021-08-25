import { Node as BaseNode, Text } from '@voiceflow/base-types';

export interface Prompt extends BaseNode.Utils.DataID {
  content: Text.SlateTextValue;
}
