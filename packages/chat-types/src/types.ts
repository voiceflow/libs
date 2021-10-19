import { Models, Node as BaseNode, Text } from '@voiceflow/base-types';

export interface Prompt extends BaseNode.Utils.DataID {
  content: Text.SlateTextValue;
}

export interface IntentSlotDialog extends Models.IntentSlotDialog {
  prompt: Prompt[];
  confirm: Prompt[];
}

export interface IntentSlot extends Models.IntentSlot {
  dialog: IntentSlotDialog;
}

export interface Intent extends Models.Intent {
  slots?: IntentSlot[];
}
