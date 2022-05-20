/** Similar to {@link NodeType}, but for runtime logging */
export enum StepLogKind {
  // Response
  TEXT = 'text',
  SPEAK = 'speak',
  AUDIO = 'audio',
  VISUALS = 'visuals',

  // User input
  BUTTONS = 'buttons',
  CHOICE = 'choice',
  CAPTURE = 'capture',
  PROMPT = 'prompt',
  INTENT = 'intent',

  // Logic
  CONDITION = 'condition',
  SET = 'set',
  RANDOM = 'random',
  FLOW = 'flow',
  EXIT = 'exit',

  // Integration
  API = 'api',
  /** @deprecated Will be removed soon */
  GOOGLE_SHEETS = 'google_sheets',
  CUSTOM_CODE = 'custom_code',
  CUSTOM_ACTION = 'custom_action',

  // Special
  START = 'start',
}

export enum GlobalLogKind {
  CONVERSATION_START = 'conversation_start',
}
