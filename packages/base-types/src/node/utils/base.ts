import { Nullable } from '@base-types/types';

export {
  BaseCommand,
  BaseNode,
  BasePort,
  BasePortList,
  BaseStep,
  BaseStepPorts,
  EmptyStepPorts,
  NextStepPorts,
  SuccessFailStepPorts,
} from '@base-types/models';

export type NodeID = Nullable<string>;

export interface DataID {
  id: string;
}

export interface NodeNextID {
  nextId?: NodeID;
}

export interface NodeElseID {
  elseId?: NodeID;
}

export interface NodeNextIDs {
  nextIds: Nullable<string>[];
}

export interface NodeRequiredNextID {
  nextId: NonNullable<NodeID>;
}

export interface NodeSuccessFailID {
  fail_id?: NodeID;
  success_id?: NodeID;
}
