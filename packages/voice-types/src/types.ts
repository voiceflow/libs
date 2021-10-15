import { IntentSlotDialog as _IntentSlotDialog, IntentSlot as _IntentSlot, Intent as _Intent } from '@voiceflow/base-types';

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

export interface IntentSlotDialog<Voice> extends _IntentSlotDialog {
  prompt: IntentPrompt<Voice>[];
  confirm: IntentPrompt<Voice>[];
}

export interface IntentSlot<Voice> extends _IntentSlot {
  dialog: IntentSlotDialog<Voice>;
}

export interface Intent<Voice> extends _Intent {
  slots?: IntentSlot<Voice>[];
}
