import type * as ApiSDK from '@voiceflow/api-sdk';

export interface Prompt<Voice> {
  desc?: string; // desc when voice is 'audio'
  voice: Voice;
  content: string;
}

export interface IntentPrompt<Voice> {
  text: string;
  slots?: string[];
  voice?: Voice;
}

export interface IntentSlotDialog<Voice> extends ApiSDK.IntentSlotDialog {
  prompt: IntentPrompt<Voice>[];
  confirm: IntentPrompt<Voice>[];
}

export interface IntentSlot<Voice> extends ApiSDK.IntentSlot {
  dialog: IntentSlotDialog<Voice>;
}

export interface Intent<Voice> extends ApiSDK.Intent {
  slots?: IntentSlot<Voice>[];
}
