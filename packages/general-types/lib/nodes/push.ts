import { Port, SlotMapping } from '@voiceflow/api-sdk';

import { DefaultStep, NodeType } from './types';

// called the "command block" on creator-app
export type StepData = {
  name: string;
  intent: string | null;
  mappings: SlotMapping[];
  diagramID: string | null;

  // manually define ports to allow command step processing
  ports: Port[];
};

export type Step = DefaultStep<NodeType.COMMAND, StepData>;
