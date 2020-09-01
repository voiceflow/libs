import { SlotMapping } from '@/version';

import { DefaultStep, NodeType } from './types';

export type StepData = {
  intent: string | null;
  mappings?: SlotMapping[];
};

export type Step = DefaultStep<NodeType.INTENT, StepData>;
