import { Nullable } from '@voiceflow/common';

export {
  BaseCommand,
  BaseNode,
  BasePort,
  BasePortList,
  BaseStep,
  BaseStepPorts,
  BuiltInFailPort,
  BuiltInNextFailPorts,
  BuiltInNextPort,
  BuiltInNoMatchNoReplyPorts,
  BuiltInNoMatchPort,
  BuiltInNoReplyPort,
  DynamicOnlyStepPorts,
  EmptyStepPorts,
  NextStepPorts,
  NoMatchNoReplyStepPorts,
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
