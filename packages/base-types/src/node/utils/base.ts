/* eslint-disable camelcase */
import { Nullable } from '@voiceflow/api-sdk';

export { BaseCommand, BaseNode, BasePort, BaseStep } from '@voiceflow/api-sdk';

export type NodeID = Nullable<string>;

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
