import { KnowledgeBaseDocumentRefreshRate } from './project/knowledgeBase';

export interface Model {
  _id: string;
  projectID: string;
  documentID: string;
  workspaceID: number;
  url: string;
  name: string;
  refreshRate: KnowledgeBaseDocumentRefreshRate;
  executeAt: Date;
  checksum?: string | null;
  tags?: string[];
  integrationOauthTokenID?: number;
  integrationExternalID?: string;
}
