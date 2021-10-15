import { Node as BaseNode, Text, IntentSlotDialog as _IntentSlotDialog, IntentSlot as _IntentSlot, Intent as _Intent } from '@voiceflow/base-types';

export interface Prompt extends BaseNode.Utils.DataID {
  content: Text.SlateTextValue;
}

export interface IntentSlotDialog extends _IntentSlotDialog {
  prompt: Prompt[];
  confirm: Prompt[];
}

export interface IntentSlot extends _IntentSlot {
  dialog: IntentSlotDialog;
}

export interface Intent extends _Intent {
  slots?: IntentSlot[];
}
