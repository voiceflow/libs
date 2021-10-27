/* eslint-disable camelcase */
import { Nullable } from '@/utils';

export { BaseCommand, BaseNode, BasePort, BaseStep } from '@/models';

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
