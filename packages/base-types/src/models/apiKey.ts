import { APIKeyID, CreatorID, ProjectID, WorkspaceID } from './shared';

export interface APIKey {
  _id: APIKeyID;

  workspaceID: WorkspaceID;
  creatorID: CreatorID;
  projectID?: ProjectID;

  name: string;
  permissions: string[];
  scopes: string[];
  data?: Record<string, any>;
}
