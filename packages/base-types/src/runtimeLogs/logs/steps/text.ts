import type { Text as TextNode } from '@base-types/node';
import type { PathReference } from '@base-types/runtimeLogs/utils';

import type { BaseStepLog } from '../base';
import type { StepLogKind } from '../kinds';

export type TextStepLog = BaseStepLog<
  StepLogKind.TEXT,
  (PathReference | Record<keyof PathReference, null>) & {
    plainContent: string;
    richContent: TextNode.TextData;
  }
>;
