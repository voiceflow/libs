/* eslint-disable camelcase */

import { SlotMapping } from '@voiceflow/api-sdk';

import { ExpressionType, ExpressionTypeV2 } from '@/types';

export { Node as DefaultNode, Port as DefaultPort, Step as DefaultStep } from '@voiceflow/api-sdk';

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
  CARD = 'card',
  INTERACTION = 'interaction',

  // logic
  SET = 'set',
  SET_V2 = 'setV2',
  IF = 'if',
  IF_V2 = 'ifV2',
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

// Integrations Step
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

// If/Set step Conditions

// Legacy
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

// New
export enum ConditionsLogicInterface {
  VARIABLE = 'variable',
  VALUE = 'value',
  LOGIC_GROUP = 'logic_group',
  EXPRESSION = 'expression',
}

export type GenericExpressionV2<T extends ExpressionTypeV2, V> = {
  type: T | null;
  value: V;
  name?: string;
  logicInterface?: ConditionsLogicInterface;
};

export type ExpressionTupleV2 = [ExpressionV2?, ExpressionV2?];
export type ValueExpressionV2 = GenericExpressionV2<ExpressionTypeV2.VALUE, string>;
export type AdvancedExpressionV2 = GenericExpressionV2<ExpressionTypeV2.ADVANCE, string>;
export type VariableExpressionV2 = GenericExpressionV2<ExpressionTypeV2.VARIABLE, string>;
export type OrExpressionV2 = GenericExpressionV2<ExpressionTypeV2.OR, ExpressionTupleV2>;
export type AndExpressionV2 = GenericExpressionV2<ExpressionTypeV2.AND, ExpressionTupleV2>;
export type LessExpressionV2 = GenericExpressionV2<ExpressionTypeV2.LESS, ExpressionTupleV2>;
export type EqualsExpressionV2 = GenericExpressionV2<ExpressionTypeV2.EQUALS, ExpressionTupleV2>;
export type GreaterExpressionV2 = GenericExpressionV2<ExpressionTypeV2.GREATER, ExpressionTupleV2>;
export type IsEmptyExpression = GenericExpressionV2<ExpressionTypeV2.IS_EMPTY, ExpressionTupleV2>;
export type ContainsExpression = GenericExpressionV2<ExpressionTypeV2.CONTAINS, ExpressionTupleV2>;
export type NotEqualExpression = GenericExpressionV2<ExpressionTypeV2.NOT_EQUAL, ExpressionTupleV2>;
export type EndsWithExpression = GenericExpressionV2<ExpressionTypeV2.ENDS_WITH, ExpressionTupleV2>;
export type HasValueExpression = GenericExpressionV2<ExpressionTypeV2.HAS_VALUE, ExpressionTupleV2>;
export type NotContainExpression = GenericExpressionV2<ExpressionTypeV2.NOT_CONTAIN, ExpressionTupleV2>;
export type StartsWithExpression = GenericExpressionV2<ExpressionTypeV2.STARTS_WITH, ExpressionTupleV2>;
export type LessOrEqualExpression = GenericExpressionV2<ExpressionTypeV2.LESS_OR_EQUAL, ExpressionTupleV2>;
export type GreaterOrEqualExpression = GenericExpressionV2<ExpressionTypeV2.GREATER_OR_EQUAL, ExpressionTupleV2>;

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

export type LogicGroupData = GenericExpressionV2<ExpressionTypeV2.AND | ExpressionTypeV2.OR, ExpressionV2[]>;

export type ExpressionData = GenericExpressionV2<ExpressionTypeV2.AND | ExpressionTypeV2.OR, (ExpressionV2 | LogicGroupData)[]>;

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

export type TraceFrame<T extends string = string, P extends unknown = any, E extends Event = Event> = {
  type: T;
  payload: P;
  paths?: { event: E }[];
  defaultPath?: number;
};
