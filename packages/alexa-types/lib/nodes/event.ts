import { DefaultCommand, DefaultStep, NodeType } from './types';

export type Mapping = {
  var: string | null;
  path: string;
};

export type StepData = {
  mappings: Mapping[];
  requestName: string;
};

export type Step = DefaultStep<NodeType.EVENT, StepData>;

export type CommandData = {
  next?: string | null;
  event: string;
  mappings: Mapping[];
};

export type Command = DefaultCommand<NodeType.EVENT, CommandData>;
