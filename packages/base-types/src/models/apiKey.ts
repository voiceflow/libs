import { AnyRecord } from '@base-types/types';

export const API_KEY_PREFIX = 'VF.';

export enum APIKeySubType {
  Workspace = 'WS',
  DialogManager = 'DM',
  SecondaryKey = 'SK',
}

const buildAPIKeyGuard =
  (type: APIKeySubType) =>
  (key: unknown): key is string =>
    typeof key === 'string' && key.startsWith(`${API_KEY_PREFIX}${type}.`);

export const isWorkspaceAPIKey = buildAPIKeyGuard(APIKeySubType.Workspace);

export const isDialogManagerAPIKey = buildAPIKeyGuard(APIKeySubType.DialogManager);

export interface Model<Data extends AnyRecord = AnyRecord> {
  _id: string;
  creatorID: number;
  projectID?: string;
  workspaceID: string;

  type: APIKeySubType;
  name: string;
  data?: Data;
  scopes: string[];
  permissions: string[];
  secondaryKeyID: string;
}
