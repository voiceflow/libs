import { AnyRecord } from '@voiceflow/common';

import { LinkType } from '../base/link';
import { Member } from './member';
import { Prototype } from './prototype';
import { Themes } from './theme';

export { LinkType } from '../base/link';
export * from './member';
export * from './prototype';
export * from './theme';

export enum Privacy {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface ReportTag {
  tagID: string;
  label: string;
}

export interface Sticker {
  id: string;
  url: string;
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
  stickers?: Sticker[];

  members: Member<MemberPlatformData>[];
  platformData: PlatformData;
}
