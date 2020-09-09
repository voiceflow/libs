import { SlotMapping } from '@/version';

import { DefaultCommand, DefaultStep, NodeType } from './types';

export type StepData = {
  intent: string | null;
  mappings?: SlotMapping[];
};

export type Step = DefaultStep<NodeType.INTENT, StepData>;

export type CommandData = {
  intent: string;
  mappings: { variable: string; slot: string }[];
  next: null | string;
};

export type Command = DefaultCommand<NodeType.INTENT, CommandData>;
