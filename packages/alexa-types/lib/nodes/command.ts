import { DefaultCommand, DefaultStep, NodeType } from './types';

export type StepData = {
  intent: string | null;
  diagramID: string | null;
  mappings: { variable: string; slot: string }[];
  name: string;
  // manually define ports to allow command step processing
  ports: { type: string; target: string | null }[];
};

export type Step = DefaultStep<NodeType.COMMAND, StepData>;

export type CommandData = {
  intent: string;
  mappings: { variable: string; slot: string }[];
  diagram_id?: string;
  next?: null | string;
};

export type Command = DefaultCommand<NodeType.COMMAND, CommandData>;
