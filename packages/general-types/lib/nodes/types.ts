import { SlotMapping } from '@voiceflow/api-sdk';

import { ExpressionType } from '@/types';

export { Step as DefaultStep, Node as DefaultNode } from '@voiceflow/api-sdk';

export type TraceFrame<T extends string = string, P extends unknown = undefined> = P extends undefined ? { type: T } : { type: T; payload: P };

export enum TraceType {
  END = 'end',
  FLOW = 'flow',
  SPEAK = 'speak',
  BLOCK = 'block',
  DEBUG = 'debug',
  CHOICE = 'choice',
  STREAM = 'stream',
  VISUAL = 'visual',
}

export type NodeID = string | null;

export enum NodeType {
  SPEAK = 'speak',
  START = 'start',
  INTERACTION = 'interaction',

  // logic
  SET = 'set',
  IF = 'if',
  RANDOM = 'random',
  CAPTURE = 'capture',

  // integrations
  API = 'api',
  ZAPIER = 'zapier',
  INTEGRATIONS = 'integrations',
  GOOGLE_SHEETS = 'google_sheets',

  // advanced
  INTENT = 'intent',
  FLOW = 'flow',
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

export enum IntegrationType {
  ZAPIER = 'Zapier',
  CUSTOM_API = 'Custom API',
  GOOGLE_SHEETS = 'Google Sheets',
}

export enum IntegrationPlatform {
  ZAPIER = 'Zapier',
  GOOGLE_SHEETS = 'Google Sheets',
}

export type IntegrationUser = {
  user_id?: string;
  platform?: IntegrationPlatform;
  user_data?: { email?: string; name?: string };
  created_at?: string;
  creator_id?: number;
  project_id?: null | string;
  requires_refresh?: null | boolean;
  integration_user_id?: string;
};

export type GenericExpression<T extends ExpressionType, V> = {
  type: T;
  value: V;
  depth: number;
};

export type ExpressionTuple = [Expression, Expression];

// can't use generic here due to recursion type issue
export type NotExpression = { type: ExpressionType.NOT; value: Expression; depth: number };
export type OrExpression = GenericExpression<ExpressionType.OR, ExpressionTuple>;
export type AndExpression = GenericExpression<ExpressionType.AND, ExpressionTuple>;
export type LessExpression = GenericExpression<ExpressionType.LESS, ExpressionTuple>;
export type PlusExpression = GenericExpression<ExpressionType.PLUS, ExpressionTuple>;
export type MinusExpression = GenericExpression<ExpressionType.MINUS, ExpressionTuple>;
export type TimesExpression = GenericExpression<ExpressionType.TIMES, ExpressionTuple>;
export type ValueExpression = GenericExpression<ExpressionType.VALUE, string>;
export type DivideExpression = GenericExpression<ExpressionType.DIVIDE, ExpressionTuple>;
export type EqualsExpression = GenericExpression<ExpressionType.EQUALS, ExpressionTuple>;
export type GreaterExpression = GenericExpression<ExpressionType.GREATER, ExpressionTuple>;
export type AdvancedExpression = GenericExpression<ExpressionType.ADVANCE, string>;
export type VariableExpression = GenericExpression<ExpressionType.VARIABLE, string>;

export type Expression =
  | OrExpression
  | AndExpression
  | NotExpression
  | LessExpression
  | PlusExpression
  | MinusExpression
  | TimesExpression
  | ValueExpression
  | DivideExpression
  | EqualsExpression
  | GreaterExpression
  | AdvancedExpression
  | VariableExpression;

export enum CommandType {
  JUMP = 'jump',
  PUSH = 'push',
}

export type Command<E> =
  | {
      type: CommandType.JUMP;
      nextID: string | null;
      event: E;
    }
  | {
      type: CommandType.PUSH;
      diagramID: string | null;
      event: E;
    };

export enum EventType {
  INTENT = 'intent',
}

export type Event<T extends EventType, D> = { type: T } & D;

export type IntentEvent = Event<
  EventType.INTENT,
  {
    intent: string;
    mappings?: SlotMapping[];
  }
>;

export type GeneralEvent = IntentEvent;

export type GeneralCommand = Command<GeneralEvent>;
