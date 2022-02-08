import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import { BaseCommand, BasePort, BaseStep, NodeID, SlotMappings } from './utils';

// called the "command block" on creator-app
export interface StepData extends SlotMappings {
  name: string;
  intent: Nullable<string>;
  diagramID: Nullable<string>;

  // manually define ports to allow command step processing
  ports: BasePort[];
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.COMMAND;
}

/**
 * The old implementation of commands, used only in alexa and google
 * use Node.Utils.AnyCommand for other platforms
 */
export interface Command extends BaseCommand, Required<SlotMappings> {
  type: NodeType.COMMAND;
  next?: NodeID;
  intent: string;
  diagram_id?: string;
}
