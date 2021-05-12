/* eslint-disable camelcase */

import { CommandMapping, Port, SlotMapping } from '@voiceflow/api-sdk';
import { NodeID } from '@voiceflow/general-types';

import { DefaultCommand, DefaultStep, NodeType } from './types';

export type StepData = {
  name: string;
  intent: string | null;
  mappings: SlotMapping[];
  diagramID: string | null;

  // manually define ports to allow command step processing
  ports: Port[];
};

export type CommandData = {
  next?: NodeID;
  intent: string;
  mappings: CommandMapping[];
  diagram_id?: string;
};

export type Step = DefaultStep<NodeType.COMMAND, StepData>;
export type Command = DefaultCommand<NodeType.COMMAND, CommandData>;
