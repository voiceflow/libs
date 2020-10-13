export enum Voice {
  AUDIO = 'audio', // not a real voice (use content as audio url)
  DEFAULT = 'default', // not a real voice (default no voice)
}

export type Prompt<V> = {
  desc?: string; // desc when voice is 'audio'
  voice: V;
  content: string;
};

export type NoMatches<V> = {
  randomize: boolean;
  reprompts: Prompt<V>[];
};

export enum ExpressionType {
  PLUS = 'plus',
  MINUS = 'minus',
  TIMES = 'times',
  DIVIDE = 'divide',
  EQUALS = 'equals',
  GREATER = 'greater',
  LESS = 'less',
  AND = 'and',
  OR = 'or',
  NOT = 'not',
  VALUE = 'value',
  VARIABLE = 'variable',
  ADVANCE = 'advance',
}
