const getRegex = (variable: string) => new RegExp(variable, 'gi');

const EQUAL_REGEX = /(equal\()(.*)(,\s?)(.*)(\))/gi;
const OR_REGEX = /(or\()(.*)(,\s?)(.*)(\))/gi;
const AND_REGEX = /(and\()(.*)(,\s?)(.*)(\))/gi;
const NOT_REGEX = /(not\()(.*)(\))/gi;

const XOR_REGEX = /(xor\()(.*)(,\s?)(.*)(\))/gi;

const ADD_REGEX = /(add\()(.*)(,\s?)(.*)(\))/gi;
const SUBTRACT_REGEX = /(subtract\()(.*)(,\s?)(.*)(\))/gi;
const MULTIPLY_REGEX = /(multiply\()(.*)(,\s?)(.*)(\))/gi;
const DIVIDE_REGEX = /(divide\()(.*)(,\s?)(.*)(\))/gi;

const POW_REGEX = /(pow\()(.*)(,\s?)(.*)(\))/gi;
const COMPARE_REGEX = /(compare\()(.*)(,\s?)(.*)(\))/gi;
const EVAL_REGEX = /(evaluate\()(.*)(\))/gi;

const RANDOM_INT_REGEX = /(randomint\()(\d*)(,?\s)?(\d*)?(\))/gi;
const RANDOM_REGEX = /(random\()(\d*)(,?\s)?(\d*)?(\))/gi;

const getMinMax = (v1: number, v2: number) => {
  let min = 0;
  let max;

  if (v2) {
    min = v1;
    max = v2;
  } else {
    max = v1;
  }
  return { min, max };
};

export const parser = (exp: string) => {
  let sanitized = exp;

  sanitized = sanitized.replace(EQUAL_REGEX, '($2 == $4)');
  sanitized = sanitized.replace(OR_REGEX, '($2 || $4)');
  sanitized = sanitized.replace(AND_REGEX, '($2 && $4)');
  sanitized = sanitized.replace(NOT_REGEX, '!$2');

  sanitized = sanitized.replace(getRegex('sqrt'), 'Math.sqrt');
  sanitized = sanitized.replace(getRegex('sign'), 'Math.sign');
  sanitized = sanitized.replace(getRegex('isNaN'), 'Number.isNaN');
  // Math.floor/round will ignore the second argument(if exist) when compiling
  sanitized = sanitized.replace(getRegex('floor'), 'Math.floor');
  sanitized = sanitized.replace(getRegex('round'), 'Math.round');
  sanitized = sanitized.replace(getRegex('integer'), 'Number.isInteger');

  sanitized = sanitized.replace(XOR_REGEX, '((!$2 && !!$4) || (!!$2 && !$4))');

  sanitized = sanitized.replace(ADD_REGEX, '($2 + $4)');
  sanitized = sanitized.replace(SUBTRACT_REGEX, '($2 - $4)');
  sanitized = sanitized.replace(MULTIPLY_REGEX, '($2 * $4)');
  sanitized = sanitized.replace(DIVIDE_REGEX, '($2 / $4)');

  sanitized = sanitized.replace(POW_REGEX, 'Math.pow($2$3$4)');
  sanitized = sanitized.replace(COMPARE_REGEX, '(($2 == $4) ? 0 : ($2 > $4) ? 1 : -1)');

  sanitized = sanitized.replace(RANDOM_REGEX, (_match, _g1, g2, _g3, g4) => {
    const { min, max } = getMinMax(g2, g4);

    return min || max ? `Math.random() * (${max} - ${min}) + ${min}` : 'Math.random()';
  });
  sanitized = sanitized.replace(RANDOM_INT_REGEX, (_match, _g1, g2, _g3, g4) => {
    const { min, max } = getMinMax(g2, g4);

    return min || max ? `Math.floor(Math.random() * (${max} - ${min} + 1)) + ${min}` : `Math.floor(Math.random())`;
  });
  sanitized = sanitized.replace(EVAL_REGEX, 'eval($2)');

  return sanitized;
};
