export interface Model {
  _id: string;
  sessionID: string;
  creatorID: number;
  projectID: string;

  os: string;
  unread: boolean;
  device: string;
  browser: string;
  createdAt: number;
  reportTags: string[];
}
