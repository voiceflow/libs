export enum DomainStatus {
  DESIGN = 'DESIGN',
  REVIEW = 'REVIEW',
  COMPLETE = 'COMPLETE',
}

export interface Domain {
  id: string;
  live: boolean;
  name: string;
  status?: DomainStatus;
  topicIDs: string[];
  updatedAt?: string;
  rootDiagramID: string;
  updatedBy?: number;
  updatedByCreatorID?: number /** @deprecated in favor of updatedBy */;
}
