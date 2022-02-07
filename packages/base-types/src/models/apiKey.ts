import { AnyRecord } from '@/types';

export interface Model<Data extends AnyRecord = AnyRecord> {
  _id: string;
  creatorID: number;
  projectID?: string;
  workspaceID: string;

  name: string;
  data?: Data;
  scopes: string[];
  permissions: string[];
}
