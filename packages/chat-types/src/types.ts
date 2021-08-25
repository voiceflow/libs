import type * as ApiSDK from '@voiceflow/api-sdk';
import { Node as BaseNode, Text } from '@voiceflow/base-types';

export interface Prompt extends BaseNode.Utils.DataID {
  content: Text.SlateTextValue;
}

export interface IntentInput extends ApiSDK.IntentInput {
  text: Text.SlateTextValue;
}

export interface IntentSlotDialog extends ApiSDK.IntentSlotDialog {
  prompt: IntentInput[];
  confirm: IntentInput[];
  utterances: IntentInput[];
}

export interface IntentSlot extends ApiSDK.IntentSlot {
  dialog: IntentSlotDialog;
}

export interface Intent extends ApiSDK.Intent {
  slots?: IntentSlot[];
  inputs: IntentInput[];
}
