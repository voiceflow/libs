import { NodeID } from '@voiceflow/general-types';

import { DefaultCommand, DefaultStep, NodeType } from './types';

export type Mapping = {
  var: string | null;
  path: string;
};

export type StepData = {
  mappings: Mapping[];
  requestName: string;
};

export type CommandData = {
  next?: NodeID;
  event: string;
  mappings: Mapping[];
};

export type Step = DefaultStep<NodeType.EVENT, StepData>;
export type Command = DefaultCommand<NodeType.EVENT, CommandData>;
