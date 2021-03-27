import { SlotMapping } from '@voiceflow/api-sdk';

import { ExpressionType } from '@/types';

export { Step as DefaultStep, Node as DefaultNode, Port as DefaultPort } from '@voiceflow/api-sdk';

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

export enum ConditionsLogicInterface {
  VARIABLE = 'variable',
  VALUE = 'value',
  LOGIC_GROUP = 'logic_group',
  EXPRESSION = 'expression',
}

export type GenericExpression<T extends ExpressionType, V> = {
  type: T;
  value: V;
  depth: number;
};

export type GenericExpressionV2<T extends ExpressionType, V> = {
  type: T;
  value: V;
  logicInterface?: ConditionsLogicInterface;
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

// new
export type ValueExpressionV2 = GenericExpressionV2<ExpressionType.VALUE, string>;
export type AdvancedExpressionV2 = GenericExpressionV2<ExpressionType.ADVANCE, string>;
export type VariableExpressionV2 = GenericExpressionV2<ExpressionType.VARIABLE, string>;
export type OrExpressionV2 = GenericExpressionV2<ExpressionType.OR, ExpressionTuple>;
export type AndExpressionV2 = GenericExpressionV2<ExpressionType.AND, ExpressionTuple>;
export type LessExpressionV2 = GenericExpressionV2<ExpressionType.LESS, ExpressionTuple>;
export type EqualsExpressionV2 = GenericExpressionV2<ExpressionType.EQUALS, ExpressionTuple>;
export type GreaterExpressionV2 = GenericExpressionV2<ExpressionType.GREATER, ExpressionTuple>;
export type IsEmptyExpression = GenericExpressionV2<ExpressionType.IS_EMPTY, ExpressionTuple>;
export type ContainsExpression = GenericExpressionV2<ExpressionType.CONTAINS, ExpressionTuple>;
export type NotEqualExpression = GenericExpressionV2<ExpressionType.NOT_EQUAL, ExpressionTuple>;
export type EndsWithExpression = GenericExpressionV2<ExpressionType.ENDS_WITH, ExpressionTuple>;
export type HasValueExpression = GenericExpressionV2<ExpressionType.HAS_VALUE, ExpressionTuple>;
export type NotContainExpression = GenericExpressionV2<ExpressionType.NOT_CONTAIN, ExpressionTuple>;
export type StartsWithExpression = GenericExpressionV2<ExpressionType.STARTS_WITH, ExpressionTuple>;
export type LessOrEqualExpression = GenericExpressionV2<ExpressionType.LESS_OR_EQUAL, ExpressionTuple>;
export type GreaterOrEqualExpression = GenericExpressionV2<ExpressionType.GREATER_OR_EQUAL, ExpressionTuple>;

export type ExpressionV2 =
  | OrExpressionV2
  | AndExpressionV2
  | LessExpressionV2
  | ValueExpressionV2
  | EqualsExpressionV2
  | GreaterExpressionV2
  | VariableExpressionV2
  | AdvancedExpressionV2
  | IsEmptyExpression
  | NotEqualExpression
  | ContainsExpression
  | EndsWithExpression
  | HasValueExpression
  | NotContainExpression
  | StartsWithExpression
  | LessOrEqualExpression
  | GreaterOrEqualExpression;

// BUILT IN EVENTS
export enum EventType {
  INTENT = 'intent',
}

export type Event<T extends string = string, D = unknown> = { type: T } & D;

export type IntentEvent = Event<
  EventType.INTENT,
  {
    intent: string;
    mappings?: SlotMapping[];
  }
>;

export enum CommandType {
  JUMP = 'jump',
  PUSH = 'push',
}

export type Command<E extends Event = Event> =
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
