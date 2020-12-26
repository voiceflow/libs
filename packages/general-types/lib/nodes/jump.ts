import { SlotMapping } from '@voiceflow/api-sdk';

import { DefaultStep, NodeType } from './types';

// called the "intent block" on creator-app
export type StepData = {
  intent: string | null;
  mappings?: SlotMapping[];
};

export type Step = DefaultStep<NodeType.INTENT, StepData>;
