import { Text as TextNode } from '@base-types/node';
import { PathReference } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type TextStepLog = BaseStepLog<
  StepLogKind.TEXT,
  (PathReference | Record<keyof PathReference, null>) & {
    plainContent: string;
    richContent: TextNode.TextData;
  }
>;
