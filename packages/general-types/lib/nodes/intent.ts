import { CommandMapping, SlotMapping } from '@voiceflow/api-sdk';

import { DefaultCommand, DefaultStep, NodeID, NodeType } from './types';

export type StepData = {
  intent: string | null;
  mappings?: SlotMapping[];
};

export type CommandData = {
  next: NodeID;
  intent: string;
  mappings: CommandMapping[];
};

export type Step = DefaultStep<NodeType.INTENT, StepData>;
export type Command = DefaultCommand<NodeType.INTENT, CommandData>;
