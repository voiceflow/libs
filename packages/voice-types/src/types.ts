import type * as ApiSDK from '@voiceflow/api-sdk';

export interface Prompt<V> {
  desc?: string; // desc when voice is 'audio'
  voice: V;
  content: string;
}

export interface IntentInput extends ApiSDK.IntentInput {
  text: string;
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
