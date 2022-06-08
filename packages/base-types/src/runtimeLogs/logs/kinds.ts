import { NodeType } from '@base-types/node';

/** Similar to {@link NodeType}, but for runtime logging */
export enum StepLogKind {
  // Response
  TEXT = 'text',
  SPEAK = 'speak',
  AUDIO = 'audio',
  VISUALS = 'visuals',
  CARD = 'card',

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

const NODE_TYPE_TO_STEP_LOG_KIND = {
  [NodeType.TEXT]: StepLogKind.TEXT,
  [NodeType.SPEAK]: StepLogKind.SPEAK,
  [NodeType.START]: StepLogKind.START,
  [NodeType.CARD]: StepLogKind.CARD,
  [NodeType.CARDV2]: StepLogKind.CARD,
  [NodeType.BUTTONS]: StepLogKind.BUTTONS,

  [NodeType.SET]: StepLogKind.SET,
  [NodeType.SET_V2]: StepLogKind.SET,
  [NodeType.IF]: StepLogKind.CONDITION,
  [NodeType.IF_V2]: StepLogKind.CONDITION,
  [NodeType.RANDOM]: StepLogKind.RANDOM,
  [NodeType.CAPTURE]: StepLogKind.CAPTURE,
  [NodeType.CAPTURE_V2]: StepLogKind.CAPTURE,

  [NodeType.API]: StepLogKind.API,
  /** @deprecated */
  [NodeType.GOOGLE_SHEETS]: StepLogKind.GOOGLE_SHEETS,

  [NodeType.INTENT]: StepLogKind.INTENT,
  [NodeType.CODE]: StepLogKind.CUSTOM_CODE,
  [NodeType.EXIT]: StepLogKind.EXIT,
  [NodeType.PROMPT]: StepLogKind.PROMPT,

  [NodeType.VISUAL]: StepLogKind.VISUALS,
} as const;

type MappableNodeType = keyof typeof NODE_TYPE_TO_STEP_LOG_KIND;
type NonMappableNodeType = Exclude<NodeType, MappableNodeType>;

export function nodeTypeToStepLogKind(nodeType: MappableNodeType): StepLogKind;
export function nodeTypeToStepLogKind(nodeType: NonMappableNodeType): undefined;
export function nodeTypeToStepLogKind(nodeType: NodeType): StepLogKind | undefined;
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function nodeTypeToStepLogKind(nodeType: NodeType): StepLogKind | undefined {
  return nodeType in NODE_TYPE_TO_STEP_LOG_KIND ? NODE_TYPE_TO_STEP_LOG_KIND[nodeType as MappableNodeType] : undefined;
}
