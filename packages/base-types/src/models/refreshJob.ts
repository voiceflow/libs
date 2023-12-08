import { KnowledgeBaseDocumentRefreshRate } from './project/knowledgeBase';

export interface Model {
  projectID: string;
  documentID: string;
  workspaceID: number;
  url: string;
  refreshRate: KnowledgeBaseDocumentRefreshRate;
  executeAt: Date;
  checksum?: string;
}
