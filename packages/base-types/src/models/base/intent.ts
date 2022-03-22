export interface IntentInput {
  text: string;
  slots?: string[];

  /** @deprecated shouldn't be used */
  voice?: string;
}

export interface IntentSlotDialog {
  prompt: unknown[];
  confirm: unknown[];
  utterances: IntentInput[];
  confirmEnabled: boolean;
}

export interface IntentSlot {
  id: string;
  dialog: IntentSlotDialog;
  required: boolean;
}

export interface Intent {
  key: string;
  name: string;
  slots?: IntentSlot[];
  inputs: IntentInput[];
  noteID?: string;
}
