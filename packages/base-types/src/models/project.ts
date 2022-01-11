import { Member } from './member';
import { BasePlatformData, CreatorID, Name, Platform, ProjectID, PrototypeModel, TagID, TeamID, VersionID } from './shared';

export enum ProjectPrototypeNLPType {
  LUIS = 'LUIS',
}

export enum ProjectLinkType {
  CURVED = 'CURVED',
  STRAIGHT = 'STRAIGHT',
}

export interface ProjectPrototypeNLPBase {
  type: string;
}

export interface ProjectPrototypeLuis extends ProjectPrototypeNLPBase {
  appID: string;
  resourceID?: string;
  type: ProjectPrototypeNLPType.LUIS;
}

export type ProjectPrototypeNLP = ProjectPrototypeLuis;

export interface ProjectPrototype {
  data: Record<string, any>;
  trainedModel?: PrototypeModel;
  lastTrainedTime?: number;
  nlp?: ProjectPrototypeNLP;
  messageDelay: {
    duration: number;
    enabled: boolean;
  };
}

export enum ProjectPrivacy {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export type ReportTag = {
  tagID: TagID;
  label: string;
};

export interface Project<P extends BasePlatformData, M extends BasePlatformData> {
  _id: ProjectID;
  teamID: TeamID;
  creatorID: CreatorID;
  _version?: number;

  name: Name;
  image?: string;
  privacy?: ProjectPrivacy.PRIVATE | ProjectPrivacy.PUBLIC;
  platform: Platform;
  linkType?: ProjectLinkType;
  prototype?: ProjectPrototype;
  devVersion?: VersionID;
  liveVersion?: VersionID;
  reportTags?: Record<TagID, ReportTag>;

  members: Member<M>[];
  platformData: P;
}
