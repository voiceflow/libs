import { Node as ChatNode } from '@voiceflow/chat-types';
import { Node as GeneralNode } from '@voiceflow/general-types';

export interface StepData {
  data: string;
}

export type Step = GeneralNode.Buttons.Step | ChatNode.Buttons.Step;

export enum ButtonNodeType {
  PATH = 'PATH',
  INTENT_PATH = 'INTENT_PATH', // local intent - choice
  INTENT = 'INTENT', // global intent
}

export type ButtonNode =
  | { name: string; nextID: string | null; type: ButtonNodeType.PATH | ButtonNodeType.INTENT_PATH }
  | { name: string; type: ButtonNodeType.INTENT; intentName: string };
