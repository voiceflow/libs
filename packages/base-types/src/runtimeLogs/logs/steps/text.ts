import { Text as TextNode } from '@base-types/node';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type TextStepLog = BaseStepLog<
  StepLogKind.TEXT,
  {
    plainContent: string;
    richContent: TextNode.TextData;
  }
>;
