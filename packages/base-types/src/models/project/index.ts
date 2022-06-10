import { AnyRecord } from '@voiceflow/common';

import { Member } from './member';
import { Prototype } from './prototype';
import { Themes } from './theme';

export * from './member';
export * from './prototype';
export * from './theme';

export enum LinkType {
  CURVED = 'CURVED',
  STRAIGHT = 'STRAIGHT',
}

export enum Privacy {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface ReportTag {
  tagID: string;
  label: string;
}
export interface Model<PlatformData extends AnyRecord, MemberPlatformData extends AnyRecord> {
  _id: string;
  teamID: string;
  _version?: number;
  creatorID: number;
  devVersion?: string;
  liveVersion?: string;

  name: string;
  type?: string; // chat | voice | etc
  image?: string;
  privacy?: Privacy;
  platform: string; // voiceflow | alexa | google | etc
  linkType?: LinkType;
  prototype?: Prototype;
  reportTags?: Record<string, ReportTag>;
  customThemes: Themes;

  members: Member<MemberPlatformData>[];
  platformData: PlatformData;
}
