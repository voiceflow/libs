import type { Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type { BaseCommand, BaseStep, CommandType, NodeID, SlotMappings } from './utils';

export enum IntentAvailability {
  LOCAL = 'LOCAL',
  GLOBAL = 'GLOBAL',
}

// called the "intent block" on creator-app
export interface StepData extends SlotMappings {
  intent: Nullable<string>;
  availability?: Nullable<IntentAvailability>;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.INTENT;
}

/**
 * The old implementation of commands, used only in alexa and google
 * use Node.Utils.AnyCommand for other platforms
 */
export interface Command extends BaseCommand, Required<SlotMappings> {
  type: CommandType.JUMP;
  next: NodeID;
  intent: string;
  diagramID?: string;
}
