import type { BaseModels, BaseNode, BaseText } from '@voiceflow/base-types';

export interface Prompt extends BaseNode.Utils.DataID {
  content: BaseText.SlateTextValue;
}

export interface IntentSlotDialog extends BaseModels.IntentSlotDialog {
  prompt: Prompt[];
  confirm: Prompt[];
}

export interface IntentSlot extends BaseModels.IntentSlot {
  dialog: IntentSlotDialog;
}

export interface Intent extends BaseModels.Intent {
  slots?: IntentSlot[];
}
