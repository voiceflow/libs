import { AnyRecord } from '@voiceflow/common';

export const API_KEY_PREFIX = 'VF.';

export enum APIKeySubType {
  Workspace = 'WS',
  DialogManager = 'DM',
}

export type APIKeyType<T extends string> = `${typeof API_KEY_PREFIX}${T}.${string}.${string}`;

export type APIKeyLegacyType = `${typeof API_KEY_PREFIX}${string}.${string}`;

export const WORKSPACE_API_KEY_REGEX = new RegExp(`^${API_KEY_PREFIX}${APIKeySubType.Workspace}\\.\\w{24}\\.\\w{16,}`);

export const DIALOG_MANAGER_API_KEY_REGEX = new RegExp(`^${API_KEY_PREFIX}${APIKeySubType.DialogManager}\\.\\w{24}\\.\\w{16,}`);

export const LEGACY_WORKSPACE_API_KEY_REGEX = new RegExp(`^${API_KEY_PREFIX}\\w{24}\\.\\w{16,}`);

export const isWorkspaceAPIKey = (key: unknown): key is APIKeyType<typeof APIKeySubType.Workspace> =>
  typeof key === 'string' && WORKSPACE_API_KEY_REGEX.test(key);

export const isDialogManagerAPIKey = (key: unknown): key is APIKeyType<typeof APIKeySubType.DialogManager> =>
  typeof key === 'string' && DIALOG_MANAGER_API_KEY_REGEX.test(key);

export const isLegacyWorkspaceAPIKey = (key: unknown): key is APIKeyLegacyType => typeof key === 'string' && LEGACY_WORKSPACE_API_KEY_REGEX.test(key);

export const extractAPIKeyID = (key: string): string => {
  if (isWorkspaceAPIKey(key) || isDialogManagerAPIKey(key)) {
    return key.split('.')[2];
  }
  if (isLegacyWorkspaceAPIKey(key)) {
    return key.split('.')[1];
  }
  throw new Error('Cannot extract the ID from an unknown API Key');
};

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
  secondaryKeyID?: string | null;
}
