import { Models } from '@voiceflow/base-types';

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

export interface IntentSlotDialog<Voice> extends Models.IntentSlotDialog {
  prompt: IntentPrompt<Voice>[];
  confirm: IntentPrompt<Voice>[];
}

export interface IntentSlot<Voice> extends Models.IntentSlot {
  dialog: IntentSlotDialog<Voice>;
}

export interface Intent<Voice> extends Models.Intent {
  slots?: IntentSlot<Voice>[];
}
