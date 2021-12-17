export enum NodeType {
  TEXT = 'text',
  SPEAK = 'speak',
  START = 'start',
  CARD = 'card',
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

  // integrations
  API = 'api',
  ZAPIER = 'zapier',
  INTEGRATIONS = 'integrations',
  GOOGLE_SHEETS = 'google_sheets',
  TWILIO = 'twilio',

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
  STREAM = 'stream',
  VISUAL = 'visual',
  GENERAL = 'general',
  DIRECTIVE = 'directive',
  DEPRECATED = 'deprecated',
}
