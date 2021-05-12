export { Command as DefaultCommand, Node as DefaultNode, Step as DefaultStep } from '@voiceflow/api-sdk';

export enum NodeType {
  // visuals
  CARD = 'card',

  // request
  COMMAND = 'command',
  INTENT = 'intent',
  INTERACTION = 'interaction',
  CAPTURE = 'capture',
}
