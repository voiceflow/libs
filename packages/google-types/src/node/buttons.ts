import { Node as ChatNode } from '@voiceflow/chat-types';
import { Node as GeneralNode } from '@voiceflow/general-types';

export interface StepData {
  data: string;
}

export type Step = GeneralNode.Buttons.Step | ChatNode.Buttons.Step;

export type ButtonNode = { name: string; nextID: string | null; type: 'PATH' | 'INTENT_PATH' } | { name: string; type: 'INTENT'; intentName: string };
