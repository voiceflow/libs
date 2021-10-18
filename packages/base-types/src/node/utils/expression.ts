import { Nullable } from '@/models/utils';

export enum ExpressionType {
  EQUALS = 'equals',
  GREATER = 'greater',
  LESS = 'less',
  AND = 'and',
  OR = 'or',
  VALUE = 'value',
  VARIABLE = 'variable',
  ADVANCE = 'advance',

  // soon to be deprecated
  PLUS = 'plus',
  MINUS = 'minus',
  TIMES = 'times',
  DIVIDE = 'divide',
  NOT = 'not',
}

// new types

export enum ExpressionTypeV2 {
  EQUALS = 'equals',
  GREATER = 'greater',
  LESS = 'less',
  AND = 'and',
  OR = 'or',
  VALUE = 'value',
  VARIABLE = 'variable',
  ADVANCE = 'advance',
  NOT_EQUAL = 'not_equal',
  GREATER_OR_EQUAL = 'greater_or_equal',
  LESS_OR_EQUAL = 'less_or_equal',
  CONTAINS = 'contains',
  NOT_CONTAIN = 'not_contain',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  HAS_VALUE = 'has_value',
  IS_EMPTY = 'is_empty',
}

// If/Set step Conditions

// Legacy
export interface GenericExpression<T extends ExpressionType, V> {
  type: T;
  value: V;
  depth: number;
}

export type ExpressionTuple = [Expression, Expression];

// can't use generic here due to recursion type issue
export interface NotExpression {
  type: ExpressionType.NOT;
  value: Expression;
  depth: number;
}
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

export interface GenericExpressionV2<T extends ExpressionTypeV2, V> {
  type: Nullable<T>;
  value: V;
  name?: string;
  logicInterface?: ConditionsLogicInterface;
}

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
