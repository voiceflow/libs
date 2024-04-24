import type { AnyRecord } from '@voiceflow/common';

import type { LinkType } from '../base/link';
import type { KnowledgeBase } from './knowledgeBase';
import type { Member } from './member';
import type { Prototype } from './prototype';
import type { Themes } from './theme';

export { LinkType } from '../base/link';
export * from './knowledgeBase';
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

export interface AIAssistSettings {
  aiPlayground?: boolean;
  generateStep?: boolean;
  generateNoMatch?: boolean;
  generativeTasks?: boolean;
}

export enum ClassifyStrategy {
  VF_NLU = 'VF_NLU',
  VF_NLU_LLM_HYBRID = 'VF_NLU_LLM_HYBRID',
}

export interface NLUSettings {
  classifyStrategy?: ClassifyStrategy;
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
  stickers?: Sticker[];
  linkType?: LinkType;
  prototype?: Prototype;
  apiPrivacy?: Privacy;
  reportTags?: Record<string, ReportTag>;
  customThemes: Themes;
  updatedAt?: string;
  updatedBy?: number;
  aiAssistSettings?: AIAssistSettings;
  nluSettings?: NLUSettings;

  members: Member<MemberPlatformData>[];
  platformData: PlatformData;

  knowledgeBase?: KnowledgeBase;
}
