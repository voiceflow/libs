export enum ButtonNodeType {
  PATH = 'PATH',
  INTENT = 'INTENT', // global intent
  INTENT_PATH = 'INTENT_PATH', // local intent - choice
}

export interface PathButtonNode {
  type: ButtonNodeType.PATH | ButtonNodeType.INTENT_PATH;
  name: string;
  nextID: string | null;
}

export interface IntentButtonNode {
  type: ButtonNodeType.INTENT;
  name: string;
  intentName: string;
}

export type ButtonNode = PathButtonNode | IntentButtonNode;
