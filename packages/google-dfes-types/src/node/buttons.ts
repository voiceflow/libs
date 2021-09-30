import { Node } from '@voiceflow/base-types';

export interface StepData {
  data: string;
}

export type Step = Node.Buttons.Step;

export type ButtonQuickReply = { name: string; nextID: string | null };
