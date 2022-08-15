import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseCommand, BaseStep, CommandType, NodeID, SlotMappings } from './utils';

// called the "command block" on creator-app
export interface StepData extends SlotMappings {
  name: string;
  intent: Nullable<string>;
  diagramID: Nullable<string>;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.COMMAND;
}

/**
 * The old implementation of commands, used only in alexa and google
 * use Node.Utils.AnyCommand for other platforms
 */
export interface Command extends BaseCommand, Required<SlotMappings> {
  type: CommandType.PUSH;
  next?: NodeID;
  intent: string;
  diagram_id?: string;
  platform?: string;
}
