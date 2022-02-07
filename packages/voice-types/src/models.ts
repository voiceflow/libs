import { BaseModels } from '@voiceflow/base-types';

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

export interface IntentSlotDialog<Voice> extends BaseModels.IntentSlotDialog {
  prompt: IntentPrompt<Voice>[];
  confirm: IntentPrompt<Voice>[];
}

export interface IntentSlot<Voice> extends BaseModels.IntentSlot {
  dialog: IntentSlotDialog<Voice>;
}

export interface Intent<Voice> extends BaseModels.Intent {
  slots?: IntentSlot<Voice>[];
}
