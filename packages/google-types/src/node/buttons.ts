import { Node } from '@voiceflow/base-types';

export interface StepData {
  data: string;
}

export type Step = Node.Buttons.Step;

export type ButtonNode = { name: string; nextID: string | null; type: 'PATH' | 'INTENT_PATH' } | { name: string; type: 'INTENT'; intentName: string };
