export { Step as DefaultStep, Node as DefaultNode, Command as DefaultCommand } from '@voiceflow/api-sdk';

export enum NodeType {
  // visuals
  CARD = 'card',

  // request
  COMMAND = 'command',
  INTENT = 'intent',
  INTERACTION = 'interaction',
  CAPTURE = 'capture',
}
