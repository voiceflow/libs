import { KnowledgeBaseDocumentRefreshRate } from './project/knowledgeBase';

export interface Model {
  _id: string;
  projectID: string;
  documentID: string;
  workspaceID: number;
  url: string;
  refreshRate: KnowledgeBaseDocumentRefreshRate;
  executeAt: Date;
  checksum?: string | null;
}
