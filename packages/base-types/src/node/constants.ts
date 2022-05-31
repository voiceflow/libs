export enum NodeType {
  TEXT = 'text',
  SPEAK = 'speak',
  START = 'start',
  CARD = 'card',
  CARDV2 = 'cardV2',
  BUTTONS = 'buttons',
  INTERACTION = 'interaction',

  // logic
  SET = 'set',
  SET_V2 = 'setV2',
  IF = 'if',
  IF_V2 = 'ifV2',
  RANDOM = 'random',
  CAPTURE = 'capture',
  CAPTURE_V2 = 'captureV2',

  // navigation
  GOTO = 'goTo',
  GOTO_NODE = 'goToNode',

  // integrations
  API = 'api',
  ZAPIER = 'zapier',
  INTEGRATIONS = 'integrations',
  GOOGLE_SHEETS = 'google_sheets',

  // advanced
  INTENT = 'intent',
  FLOW = 'flow',
  COMPONENT = 'component',
  CODE = 'code',
  EXIT = 'exit',
  PROMPT = 'prompt',
  COMMAND = 'command',
  TRACE = 'trace',

  // other
  URL = 'url',
  STREAM = 'stream',
  VISUAL = 'visual',
  GENERAL = 'general',
  DIRECTIVE = 'directive',
  DEPRECATED = 'deprecated',
}

export const RUNTIME_ONLY_NODES = [NodeType.GOTO] as const;
